import React, { useState } from "react";
import { StyleSheet, css } from "aphrodite-jss";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(email, password);
  return (
    <div className={css(styles.login)}>
      <div className={css(styles.login__logo)}>
        <span>Wchat</span>
      </div>
      <div className={css(styles.login__form)}>
        <div className={css(styles.login__form__input)}>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
            value={email}
          />
        </div>
        <div className={css(styles.login__form__input)}>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            value={password}
          />
        </div>
        <div className={css(styles.login__form__button)}>
          <button>Log in</button>
        </div>
        <div className={css(styles.separator)}>
          <span>or</span>
        </div>
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  login: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  login__logo: {
    marginTop: "10%",
    marginBottom: "20px",
    width: "100%",
    height: "30px",
    display: "flex",
    paddingLeft: "10%",
    alignItems: "center",
    justifyContent: "center",
    "& span": {
      fontSize: "2.125rem",
      fontWeight: 300,
      linHeight: "normal",
      color: "#0986CCE0",
      fontStyle: "normal",
    },
  },

  login__form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    "& input": {
      width: "20.5rem",
      height: "2.5rem",
      borderRadius: "0.25rem",
      border: "1px solid #E0E0E0",
      padding: "0.5rem",
      "&:focus": {
        outline: "1px solid #0986CC",
      },
      "&::placeholder": {
        fontSize: "1.125rem",
        fontWeight: 300,
        lineHeight: "normal",
        color: "#828282",
        fontStyle: "normal",
      },
    },
  },
  login__form__input: {
    margin: "0.5rem",
  },
  login__form__button: {
    margin: "0.5rem",
    "& button": {
      width: "20.5rem",
      height: "2.5rem",
      borderRadius: "0.25rem",
      border: "1px solid #E0E0E0",
      padding: "0.5rem",
      backgroundColor: "#0986CC",
      color: "white",
      fontSize: "1.125rem",
      fontWeight: 300,
      lineHeight: "normal",
      fontStyle: "normal",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
    },
  },

  separator: {},
});

export default Login;
