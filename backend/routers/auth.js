const express = require("express");

const {
  registerClient,
  sendVerificationEmail,
  verifyUser,
  loginUser,
  logoutUser,
  requestPasswordReset,
  updatePassword,
} = require("../controllers/auth");
const { validate } = require("express-validation");
const {
  validateRegisterClient,
  validateVerifyUser,
  validateSendVerificationEmail,
  validateLoginUser,
  validateUpdatePassword,
} = require("../middlewares/validators/user");

const authRouter = express.Router();

authRouter.post(
  "/register",
  validate(validateRegisterClient, {}, {}),
  registerClient
);

authRouter.post(
  "/send-verification-email",
  validate(validateSendVerificationEmail, {}, {}),
  sendVerificationEmail
);

authRouter.get(
  "/verify-user/:userId/:token",
  validate(validateVerifyUser, {}, {}),
  verifyUser
);

authRouter.post("/login", validate(validateLoginUser, {}, {}), loginUser);

authRouter.post("/logout", logoutUser);

authRouter.post("/request-password-reset", requestPasswordReset);

authRouter.patch(
  "/update-password/:token",
  validate(validateUpdatePassword, {}, {}),
  updatePassword
);

module.exports = authRouter;
