const bcrypt = require("bcrypt");
const User = require("../models/User");
const crypto = require("crypto");
const Token = require("../models/Token");
const passwordMiddleware = require("../utils/password");
const {
  createTokenUser,
  attachCookiesToResponse,
} = require("../utils/index");

const { emailQueue } = require("../worker");
// const { TokenError } = require("../errors/index");

const registerClient = async (req, res) => {
  try {
    const { lastName, firstName, username, email, password } = req.body;

    // check if user exists
    const userExists = await User.findOne({ email: email });
    if (userExists)
      return res
        .status(403)
        .json({ message: "User with that email already exists" });

    // create new user
    await User.create({
      lastName,
      firstName,
      username,
      email,
      password,
    })
      .then((result) => {
        return res.status(201).json({
          id: result._id,
          lastName: result.lastName,
          firstName: result.firstName,
          username: result.username,
          email: result.email,
        });
      })
      .catch((err) => {
        return res.status(500).json(err);
      });
  } catch (err) {
    return res.status(500).send(err);
  }
};

const sendVerificationEmail = async (req, res) => {
  try {
    const email = req.body.email;

    // check if user exists
    const user = await User.findOne({ email: email });
    if (!user) return res.status(404).json({ message: "user does not exist" });

    // generate random string
    const verificationToken = crypto.randomBytes(10).toString("hex");

    console.log(verificationToken);
    // save created token to db
    await User.findOneAndUpdate(
      {
        email,
      },
      {
        verificationToken,
      }
    );

    // send verification email
    await emailQueue.add("sendVerificationEmail", {
      userId: user._id,
      name: user.firstName,
      email,
      verificationToken,
    });
    return res.status(200).json({ message: "verification link sent" });
  } catch (err) {
    return res.status(500).send(err);
  }
};

const verifyUser = async (req, res) => {
  try {
    // check if user exists
    const user = await User.findOne({ _id: req.params.userId });
    if (!user) return res.status(400).json({ message: "invalid token" });

    // check if token is valid
    const token = user.verificationToken;
    if (token !== req.params.token)
      return res.status(400).json({ message: "invalid token" });

    // verify user and delete token
    user.isVerified = true;
    user.verified = Date.now();
    user.verificationToken = "";

    await user.save();
    // send email verification complete email
    await emailQueue.add("sendEmail", {
      to: user.email,
      subject: "User verification",
      html: "Congratulations, your account verification is complete",
    });
    return res.status(200).json({ message: "user verified" });
  } catch (err) {
    console.log(err);
    return res.status(500).send(err);
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    // const {error} =loginUserValidator.validate(req.body);
    // if (error) throw error;

    const user = await User.findOne({ email }).select("-password");
    if (!user) throw new Error("Invalid login details");

    //compare passwords
    const passwordsMatch = user.comparePassword(password);
    if (!passwordsMatch) throw new Error("Invalid login details");
    if (!user.isVerified) {
      throw new Error("Please verify your email");
    }
    const tokenUser = createTokenUser(user);

    // create refresh token
    let refreshToken = "";
    // check for existing token
    const existingToken = await Token.findOne({ userId: user._id });

    if (existingToken) {
      const { isValid } = existingToken;
      if (!isValid) {
        throw new Error("Session expired, Please login again");
      }
      refreshToken = existingToken.refreshToken;
      attachCookiesToResponse({ res, user: tokenUser, refreshToken });

      res.status(200).json({
        status: "Success",
        message: "Login Successful",
        data: {
          user,
        },
      });
    }
  } catch (error) {
    return res.status(500).send(error);
  }
};

const requestPasswordReset = async (req, res, next) => {
  try {
    const email = req.body.email;
    const user = await User.findOne({
      email,
    });
    if (!user) {
      const err = new Error();
      err.name = "Authentication Error";
      err.status = 401;
      err.message = "This user does not exist";
      throw err;
    }

    const token = await Token.findOne({ userId: user._id });
    if (token) await token.deleteOne();

    const resetPasswordToken = crypto.randomBytes(32).toString("hex");
    const hash = passwordMiddleware.hashPassword(resetPasswordToken);
    const tenMinutes = 1000 * 60 * 10;
    const passwordTokenExpirationDate = new Date(Date.now() + tenMinutes);
    user.passwordToken = hash;
    user.passwordTokenExpirationDate = passwordTokenExpirationDate;
    await user.save();
  
    base_url = process.env.BASE_URL
    const link = `${base_url}/resetpassword?userId=${user._id}&resetToken=${resetPasswordToken}`;
    await emailQueue.add("sendEmail", {
      email,
      subject: "password reset",
      html: `<p>You are receiving this email because you requested for a password reset. Click this link to reset your password: ${link}</p>`,
    });

    return res
      .status(200)
      .json({ message: "a password reset link has been sent" });
  } catch (error) {
    next(error);
  }
};

const updatePassword = async (req, res, next) => {
  try {
    const { password, token } = req.body;

    const user = await User.findOne({
      token,
    });
    if (!user) {
      throw new Error("Invalid or expired reset token");
    }

    await User.updateOne(
      { passwordToken },
      {
        password: password,
        passwordToken: undefined,
        passwordTokenExpirationDate: undefined,
      }
    );
    return res.status(200).json({
      message: "password updated successfully. you can proceed to log in.",
    });
  } catch (error) {
    next(error);
  }
};

const logoutUser = async (req, res) => {
  await Token.findOneAndDelete({ userId: req.user.userId });

  res.cookie("accessToken", "logout", {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  res.cookie("refreshToken", "logout", {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  res.status(200).json({ msg: "user logged out!" });
};

module.exports = {
  registerClient,
  sendVerificationEmail,
  verifyUser,
  loginUser,
  requestPasswordReset,
  updatePassword,
  logoutUser,
};
