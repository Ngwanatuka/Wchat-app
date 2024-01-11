import React from "react";
import { StyleSheet, css } from "aphrodite";
import { Avatar } from "@mui/material";

function Suggestions() {
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
              <span className={css(styles.relation)}>
                New to Wchat
              </span>
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
              <span className={css(styles.relation)}>
                New to Wchat
              </span>
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
              <span className={css(styles.relation)}>
                New to Wchat
              </span>
            </div>
          </div>
          <div className={css(styles.follow__button)}>Follow</div>
        </div>

      </div>
    </div>
  );
}

const styles = StyleSheet.create({});

export default Suggestions;
