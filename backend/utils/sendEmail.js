const nodemailer = require("nodemailer");
const nodemailerConfig = require("../config/nodemailer");

const sendEmail = async ({ to, subject, html }) => {
  const transporter = nodemailer.createTransport(nodemailerConfig);
  try {
    const info = await transporter.sendMail({
      from: `Wchat <${process.env.AUTH_EMAIL}>`,
      to,
      subject,
      html,
    });
    console.log("Message sent: " + info.response);
    return info.response;
  } catch (error) {
    console.error(error);
    return error;
  }
};

module.exports = sendEmail;
