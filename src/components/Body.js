import React from "react";
import "../styles/font.css";
import { StyleSheet, css } from "aphrodite";
import instagramIcon from "../assets/Instagram.png";
import faceBookIcon from "../assets/facebook.png";
import googleIcon from "../assets/Google.png";

const Body = () => {
  return (
    <div className={css(styles.body)}>
      <div className={css(styles.leftContainer)}>
        <div className={css(styles.leftContainerContent)}>
          <h1 className={css(styles.leftContainerContentHeader)}>
            Welcome to Wchat where productivity lives!
          </h1>
        </div>
      </div>
      <div className={css(styles.rightContainer)}>
        {/* Login Container */}
        <div className={css(styles.loginContainer)}>
          <div>
            {/* Title: Log in to Wchat */}
            <div className={css(styles.loginTitle)}>Log in to Wchat</div>
          </div>
          <div>
            {/* Information and Links */}
            <div className={css(styles.signinText)}>
              Don't have an account? Let's <a href="#">Get started</a>
            </div>
            {/* Icons */}
            <div className={css(styles.iconContainer)}>
              <div className={css(styles.icon)}>
                <a href="#">
                  {/* Google Icon */}
                  <img src={googleIcon} alt="Google" />
                </a>
              </div>
              <div className={css(styles.icon)}>
                <a href="#">
                  {/* Facebook Icon */}
                  <img src={faceBookIcon} alt="Facebook" />
                </a>
              </div>
              <div className={css(styles.icon)}>
                <a href="#">
                  {/* instagram */}
                  <img src={instagramIcon} alt="Instagram" />
                </a>
              </div>
            </div>
          </div>
          {/* OR Lines */}
          <div className={css(styles.orContainer)}>
            <div className={css(styles.orLine)}></div>
            <span className={css(styles.orText)}>or</span>
            <div className={css(styles.orLine)}></div>
          </div>
          {/* Fields */}
          <div className={css(styles.fieldsContainer)}>
            {/* Email Address */}
            <div className={css(styles.inputContainer)}>
              <label className={css(styles.inputLabel)}></label>
              <input type="text" placeholder="Enter your email" />
            </div>
            {/* Password */}
            <div className={css(styles.inputContainer)}>
              <label className={css(styles.inputLabel)}></label>
              <input type="password" placeholder="Enter your password" />
            </div>
            {/* Checkbox */}
            <div className={css(styles.checkBox)}>
              <label>
                <input type="checkbox" />
                Remember me
              </label>
            </div>
            {/* Login Button */}
            <div>
              <button className={css(styles.loginButton)}>Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = StyleSheet.create({
  body: {
    display: "flex",
    width: "100%",
    height: "calc(100vh - 60px)",
    backgroundColor: "#F1F1F1",
  },
  leftContainer: {
    display: "flex",
    width: "35%",
    height: "100%",
    backgroundColor: "#0986CC",
    flexShrink: "0",
    alignContent: "center",
    justifyContent: "center",
  },
  leftContainerContent: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  leftContainerContentHeader: {
    width: "14rem",
    height: "6.25rem",
    color: "white",
    fontSize: "2rem",
    margin: "0",
    textAlign: "center",
    fontWeight: "500",
    lineHeight: "normal",
    fontSize: "1.5rem",
    fontStyle: "normal",
    textAlign: "center",
  },
  rightContainer: {
    flex: "1",
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  loginContainer: {
    width: "50%",
    padding: "20px",
    borderRadius: "5px",
    margin: "20px",
  },
  loginTitle: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "20px",
  },

  // signinText
  signinText: {
    fontSize: "0.875rem",
    fontWeight: "small",
    marginBottom: '20px',
  },

  iconContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
    width: '31.03663rem',
    height: '3.5rem',
    flexShrink: "0",
  },

  icon: {                         
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "8.16756rem",
    height: '3.5rem',
    borderRadius: "5px",
    border: "1px solid #ddd",
    flexShrink: "0",
  },

  // Style for OR lines

  orContainer: {
    width: '31.28794rem',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "20px 0",
    position: "relative",
  },
  orLine: {
    flex: 1,
    height: "1px",
    background: "#ddd",
    width: '13.08488rem',
  },
  orText: {
    margin: "0 10px",
    color: "#555",
  },

  fieldsContainer: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "20px",
    width: '31.28794rem',
  },
  

  // Style for label and input
  inputContainer: {
    marginBottom: "10px",
  },
  inputLabel: {
    marginBottom: "5px",
    fontWeight: "bold",
    width: '31.28794rem',
  },

  // checkBox
  checkBox: {
    marginTop: '20px',
    marginBottom: '20px',
  },

  // Style for the login button
  loginButton: {
    backgroundColor: "#0986CC",
    color: "white",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    width: '31.03663rem',
  },
});

export default Body;
