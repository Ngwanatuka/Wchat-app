import React from "react";
import { StyleSheet, css } from "aphrodite-jss";
import styled from "@emotion/styled";

function SignUp() {
  return (
    <div className={css(styles.SignUp)}>
      {" "}
      <div className={css(styles.signup__logo)}>
        <span>Wchat</span>
      </div>
      <div className={css(styles.signup__form)}>
        <div className={css(styles.signup__form__input)}>
          <input type="text" placeholder="Email" />
        </div>
        <div className={css(styles.signup__form__input)}>
          <input type="text" placeholder="Username" />
        </div>
        <div className={css(styles.signup__form__input)}>
          <input type="password" placeholder="Password" />
        </div>
        <div className={css(styles.signup__form__button)}>
          <button>Sign up</button>
        </div>
        <div className={css(styles.separator)}>
          <span>or</span>
        </div>
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
    signup: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      },
    
      signup__logo: {
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
    
      signup__form: {
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
      signup__form__input: {
        margin: "0.5rem",
      },
      signup__form__button: {
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
    
      separator: {
       
      },
});

export default SignUp;
