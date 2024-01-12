import React from "react";
import { StyleSheet, css } from "aphrodite-jss";
import { Avatar } from "@mui/material";

function Suggestions(user) {
  return (
    <div className={css(styles.suggestions)}>
      <div className={css(styles.suggestions__title)}>Suggestions For You</div>
      <div className={css(styles.seggestions__userNames)}>
        <div className={css(styles.suggestions__username)}>
          <div className={css(styles.username__left)}>
            <span className={css(styles.avatar)}>
              <Avatar>R</Avatar>
            </span>
            <div className={css(styles.username__infor)}>
              <span className={css(styles.username__name)}>ngwanatuka</span>
              <span className={css(styles.relation)}>New to Wchat</span>
            </div>
          </div>
          <div className={css(styles.follow__button)}>Follow</div>
        </div>

        <div className={css(styles.suggestions__username)}>
          <div className={css(styles.username__left)}>
            <span className={css(styles.avatar)}>
              <Avatar>R</Avatar>
            </span>
            <div className={css(styles.username__infor)}>
              <span className={css(styles.username__name)}>ngwanatuka</span>
              <span className={css(styles.relation)}>New to Wchat</span>
            </div>
          </div>
          <div className={css(styles.follow__button)}>Follow</div>
        </div>

        <div className={css(styles.suggestions__username)}>
          <div className={css(styles.username__left)}>
            <span className={css(styles.avatar)}>
              <Avatar>R</Avatar>
            </span>
            <div className={css(styles.username__infor)}>
              <span className={css(styles.username__name)}>ngwanatuka</span>
              <span className={css(styles.relation)}>New to Wchat</span>
            </div>
          </div>
          <div className={css(styles.follow__button)}>Follow</div>
        </div>
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  suggestions: {
    marginTop: "30px",
    marginRight: "20px",
  },

  suggestions__title: {
    color: "grey",
    fontWeight: "bolder",
  },

  username__left: {
    display: "flex",
    alignItems: "center",
  },

  username__infor: {
    display: "flex",
    flexDirection: "column",
  },

  relation: {
    color: "grey",
    fontSize: "12px",
  },

  suggestions__username: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "15px",
    
  },

  follow__button: {
    color: "#0095f6",
    background: "transparent",
    border: "0",
    "&:hover": {
      cursor: "pointer",
      color: "grey",
    },
  },

  username__name: {
    fontWeight: 600,
    fontSize: "14px",
  },
  
avatar: {
  marginRight: "10px",
},

});

export default Suggestions;
