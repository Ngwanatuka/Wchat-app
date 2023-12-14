import React from "react";
import "../styles/font.css";
import { StyleSheet, css } from "aphrodite";

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
            <div>
              Don't have an account? Let's <a href="#">Get started</a>
            </div>
            {/* Icons */}
            <div className={css(styles.iconContainer)}>
              <a href="#">
                {/* Google Icon */}
                <img src="google-icon.png" alt="Google" />
              </a>
              <a href="#">
                {/* Facebook Icon */}
                <img src="facebook-icon.png" alt="Facebook" />
              </a>
              <a href="#">
                {/* LinkedIn Icon */}
                <img src="linkedin-icon.png" alt="LinkedIn" />
              </a>
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
            <div className={css(styles.inputContainer)}>
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
  iconContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
  },

  // Style for OR lines

  orContainer: {
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
  },
  orText: {
    margin: "0 10px",
    color: "#555",
  },

  fieldsContainer: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "20px",
  },
  // Style for label and input
  inputContainer: {
    marginBottom: "10px",
  },
  inputLabel: {
    marginBottom: "5px",
    fontWeight: "bold",
  },

  // Style for label and input
  inputContainer: {
    marginBottom: "10px",
  },
  inputLabel: {
    marginBottom: "5px",
    fontWeight: "bold",
  },
  // Style for the login button
  loginButton: {
    backgroundColor: "#0986CC",
    color: "white",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
});

export default Body;
