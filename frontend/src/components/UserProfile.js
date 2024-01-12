import React from "react";
import { StyleSheet, css } from "aphrodite-jss";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar } from "@mui/material";

function UserProfile() {
  return (
    <div className={css(styles.UserProfile)}>
      <div className={css(styles.userProfile__container)}>
        <div className={css(styles.userProfile__header)}>
          <div className={css(styles.userProfile__1stContainer)}>
            <span>Username</span>
            <div className={css(styles.userProfile__1stContainer__button)}>
              <ControlPointIcon />
              <MenuIcon />
            </div>
          </div>
          <div className={css(styles.userProfile__2ndContainer)}>
            <div className={css(styles.userProfile__2ndContainer__avatar)}>
              <Avatar />
            </div>
            <div className={css(styles.userProfile__3rdContainer)}>
              <span> 0 post</span>
              <span> 0 followers</span>
              <span> 0 following</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  UserProfile: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  userProfile__container: {
    width: "46.5625rem",
    height: "100vh",
    backgroundColor: "#fff",
  },
  userProfile__header: {
    width: "100%",
    height: "17.25rem",
  },

  userProfile__1stContainer: {
    width: "100%",
    height: "5.5rem",
    backgroundColor: "#0986CC",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 1.5rem",
    "& span": {
      fontSize: "1.125rem",
      fontWeight: 300,
      lineHeight: "normal",
      color: "#fff",
      fontStyle: "normal",
    },
  },
  userProfile__1stContainer__button: {
    width: "5.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "& svg": {
      fontSize: "1.9rem",
      color: "#fff",
    },
  },

  userProfile__2ndContainer: {
    width: "100%",
    height: "11.75rem",
    display: "flex",
    alignItems: "center",
  },
  userProfile__2ndContainer__avatar: {
    width: "12.125rem",
    height: "100%",
    backgroundColor: "#0986CC",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",    
  },


  userProfile__3rdContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#0986CC",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& span": {
      margin: "0 0.5rem",
      fontSize: "1.125rem",
      fontWeight: 300,
      lineHeight: "normal",
      color: "#fff",
      fontStyle: "normal",
    },
  },
});

export default UserProfile;
