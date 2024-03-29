const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { ObjectId } = mongoose.Schema;
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      trim: true,
      required: [true, "Please add your first name"],
      maxlength: 32,
    },
    lastName: {
      type: String,
      trim: true,
      required: [true, "Please add your last name"],
      maxlength: 32,
    },
    username: {
      type: String,
      trim: true,
      required: [true, "Please add a username"],
      maxlength: 32,
    },
    email: {
      type: String,
      trim: true,
      required: [true, "Please add an e-mail"],
      unique: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please add a valid email address",
      ],
    },
    password: {
      type: String,
      trim: true,
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
    secretKey: String,
    verificationToken: String,
    isVerified: {
      type: Boolean,
      default: false,
    },
    verified: Date,
    passwordToken: {
      type: String,
    },
    passwordTokenExpirationDate: {
      type: Date,
    },
    isGoogleUser: { type: Boolean, default: false },
  },
  { timestamps: true }
);

User.pre("save", async function (next) {
  if (!this.isModified("password") || this.password === undefined) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = bcrypt.hash(this.password, salt);
});
User.methods.comparePassword = async function (inputPassword) {
  const isMatch = await bcrypt.compare(inputPassword, this.password);
  return isMatch;
};
const User = mongoose.model("User", userSchema);
module.exports = User;
