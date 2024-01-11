import { StyleSheet, css } from "aphrodite-jss";
import React, { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";

function Athentication() {
  const [active, setActive] = useState("login");

  const handleChange = () => {
    setActive(active === "login" ? "signup" : "login");
  };

  return (
    <div className={css(styles.authentication)}>
      <div className={css(styles.leftside)}>
        <div className={css(styles.leftside__logo)}>
          <span className={css(styles.leftside__logo__text)}>Wchat</span>
        </div>
        <div className={css(styles.welcome__box)}>
          <h1 className={css(styles.welcome)}>
            Welcome to Wchat where Productivity lives
          </h1>
        </div>
      </div>
      <div className={css(styles.rightside)}>
        {active === "login" ? <Login /> : <SignUp />}

        <div className={css(styles.auth__more)}>
          <span>
            {active === "login" ? (
              <>
                Don't have an account? <button onClick={handleChange}>Get started</button>
              </>
            ) : (
              <>
                Have an account? <button onClick={handleChange}>Log in</button>
              </>
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  authentication: {
    display: "flex",
    flexDirection: "row",
    margin: "0",
  },

  leftside: {
    width: "33.25rem",
    display: "flex",
    flexDirection: "column",

    backgroundColor: "#0986CCE0",
    height: "100vh",
  },
  leftside__logo: {
    marginTop: "10%",
    width: "100%",
    height: "30px",
    display: "flex",
    paddingLeft: "10%",
    alignItems: "center",
    "& span": {
      fontSize: "2.125rem",
      fontWeight: 300,
      linHeight: "normal",
      color: "white",
      fontStyle: "normal",
    },
  },
  welcome__box: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: "29.5rem",
    height: "100vh",
  },
  welcome: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    width: "22.25rem",
    height: "4.375rem",
    fontSize: "2.125rem",
    fontWeight: 300,
    lineHeight: "normal",
    color: "white",
    fontStyle: "normal",
    textAlign: "center",
  },
  rightside: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",
  },

  auth__more: {
    width: "400px",
    marginTop: "40px",
    textAlign: "center",
    "& span": {
      fontWeight: 500,
      fontSize: "14px",
    },
    "& button": {
      backgroundColor: "transparent",
      border: "none",
      color: "#0986CCE0",
      fontWeight: 500,
      fontSize: "14px",
      cursor: "pointer",
    },
    "& button:hover": {
      cursor: "pointer",
    },
  },
});

export default Athentication;
