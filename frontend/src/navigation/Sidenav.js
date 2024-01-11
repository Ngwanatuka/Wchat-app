import React from "react";
import { StyleSheet, css } from "aphrodite-jss";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MenuIcon from "@mui/icons-material/Menu";

function sidenav() {
  return (
    <div className={css(styles.sidenav)}>
      <div className={css(styles.logoContainer)}>
        <div className={css(styles.logo)}>
          <span className={css(styles.logoText)}>Wchat</span>
        </div>
      </div>

      <div className={css(styles.sidenav__buttons)}>
        {/* icons */}

        <button className={css(styles.sidenav__button)}>
          <HomeIcon />
          <span> Home</span>
        </button>
        <button className={css(styles.sidenav__button)}>
          <SearchIcon />
          <span> Search</span>
        </button>
        <button className={css(styles.sidenav__button)}>
          <ExploreIcon />
          <span> Explore</span>
        </button>
        <button className={css(styles.sidenav__button)}>
          <ChatIcon />
          <span> Message</span>
        </button>

        <button className={css(styles.sidenav__button)}>
          <FavoriteBorderIcon />
          <span> Notifications</span>
        </button>
        <button className={css(styles.sidenav__button)}>
          <AddCircleOutlineIcon />
          <span> Create</span>
        </button>
      </div>
      <div className={css(styles.sidenav_more)}>
        <button className={css(styles.sidenav__button)}>
          <MenuIcon />
          <span> More</span>
        </button>
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  sidenav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px",
    flexDirection: "column",
    height: "100vh",
  },

  logoText: {
    fontSize: '2.125rem',
    fontStyle: "normal",
    fontWeight: 300,
    lineHeight: "normal",
  },

  sidenav__buttons: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: "10px",
    flexDirection: "column",
  },
  sidenav__button: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    background: 0,
    border: 0,
    color: "white",
    cursor: "pointer",
    margin: " 5px 10px 5px 10px",
    padding: "10px 15px 10px 15px",
    borderRadius: "15px",
    width: "100%",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "rgba(255, 255, 255, 0.128)",
    },
    "& span": {
      fontSize: "18px",
      fontWeight: "bold",
      marginLeft: "10px",
    },
  },


});

export default sidenav;
