import React, { useState } from "react";
import "../styles/font.css";
import { StyleSheet, css } from "aphrodite";
import instagramIcon from "../assets/Instagram.png";
import faceBookIcon from "../assets/facebook.png";
import googleIcon from "../assets/Google.png";
import UserProfile from "./UserProfile";

const Body = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [user, setUser] = useState(null);

  const toggleSignUpMode = () => {
    setIsSignUp(!isSignUp);
  };

  const signUpFunction = async (email, password) => {
    try {
      const userObj = {
        id: 1,
        email,
        password,
      };

      return userObj;
    } catch (error) {
      console.log("Sign up error: ", error);
      return null;
    }
  };

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please fill in your email and password");
      return;
    }

    console.log("Email: ", email);
    console.log("Password: ", password);

    if (isSignUp) {
      if (!confirmPassword) {
        alert("Please confirm your password");
        return;
      }

      if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
      }

      // Call the mock sign up function
      const userObject = await signUpFunction(email, password);

      if (!userObject) {
        // Sign up failed
        alert("Sign up failed");
        return;
      }

      setUser(userObject);
    }
  };

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
            <div className={css(styles.loginTitle)}>
              {isSignUp ? "Sign Up to Wchat" : "Log in to Wchat"}
            </div>
          </div>
          <div>
            {/* Information and Links */}
            <div className={css(styles.signinText)}>
              {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
              <a
                className={css(styles.getStartedLink)}
                href="#"
                onClick={toggleSignUpMode}
              >
                {isSignUp ? "Log in" : "Get started"}
              </a>
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
            <span className={css(styles.orText)}>OR</span>
            <div className={css(styles.orLine)}></div>
          </div>
          {/* Fields */}
          <div className={css(styles.fieldsContainer)}>
            {/* Email Address */}
            <div className={css(styles.inputContainer)}>
              <label className={css(styles.inputLabel)}></label>
              <input
                className={css(styles.input)}
                type="text"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {/* Password */}
            {(isSignUp || !isSignUp) && (
              <div className={css(styles.inputContainer)}>
                <label className={css(styles.inputLabel)}>
                  {isSignUp ? "" : ""}
                </label>
                <input
                  className={css(styles.input)}
                  type="password"
                  placeholder={
                    isSignUp ? "Enter your password" : "Enter your password"
                  }
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            )}
            {/* Additional Confirm Password field for Sign-Up */}
            {isSignUp && (
              <div className={css(styles.inputContainer)}>
                <label className={css(styles.inputLabel)}></label>
                <input
                  className={css(styles.input)}
                  type="password"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            )}
            {/* Checkbox */}
            <div className={css(styles.checkBox)}>
              <label>Forgot Password?</label>
            </div>
            {/* Login Button */}
            <div>
              <button className={css(styles.loginButton)} onClick={handleLogin}>
                {isSignUp ? "Sign Up" : "Log In"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ... (existing code) ...

const styles = StyleSheet.create({
  body: {
    display: "flex",
    width: "100%",
    height: "calc(100vh - 3.75rem)", // 60px in rem
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
    padding: "1.25rem", // 20px in rem
    borderRadius: "0.3125rem", // 5px in rem
    margin: "1.25rem", // 20px in rem
  },
  loginTitle: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "1.25rem", // 20px in rem
  },

  // signinText
  signinText: {
    fontSize: "0.875rem",
    fontWeight: "small",
    marginBottom: "1.25rem", // 20px in rem
  },

  getStartedLink: {
    textDecoration: "none",
    color: "#0986CC",
    fontWeight: "bold",
    cursor: "pointer",
  },

  iconContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "1.25rem", // 20px in rem
    width: "31.03663rem",
    height: "3.5rem",
    flexShrink: "0",
  },

  icon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "8.16756rem",
    height: "3.5rem",
    borderRadius: "0.3125rem", // 5px in rem
    border: "0.0625rem solid #ddd", // 1px in rem
    flexShrink: "0",
  },

  // Style for OR lines

  orContainer: {
    width: "31.28794rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "1.25rem 0", // 20px in rem
    position: "relative",
  },
  orLine: {
    flex: 1,
    height: "0.0625rem", // 1px in rem
    background: "#ddd",
    width: "13.08488rem",
  },
  orText: {
    margin: "0 1rem", // 10px in rem
    color: "#555",
  },

  fieldsContainer: {
    // display: "flex",
    // flexDirection: "column",
    // marginBottom: "1.25rem", // 20px in rem
  },

  // Style for label and input

  input: {
    border: "none",
    width: "31.03663rem",
    height: "4.0625rem",
    fontSize: "1rem",
    borderRadius: "0.3125rem", // 5px in rem
    border: "0.0625rem solid #ddd", // 1px in rem
    padding: "0 1.25rem", // 20px in rem
  },

  inputContainer: {
    display: "flex",
    marginBottom: "1.25rem", // 20px in rem

    width: "31.03663rem",
    height: "4.0625rem",
  },
  inputLabel: {
    display: "block",
  },

  // checkBox
  checkBox: {
    marginTop: "1.25rem", // 20px in rem
    marginBottom: "1.25rem", // 20px in rem
    color: "#0986CC",
  },

  // Style for the login button
  loginButton: {
    backgroundColor: "#0986CC",
    color: "white",
    padding: "1.25rem", // 20px in rem
    border: "none",
    borderRadius: "0.3125rem", // 5px in rem
    cursor: "pointer",
    width: "31.03663rem",
  },
});

export default Body;
