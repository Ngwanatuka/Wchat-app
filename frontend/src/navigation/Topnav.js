import React from "react";
import { StyleSheet, css } from "aphrodite";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

function Topnav() {
  return (
    <div className={css(styles.Topnav)}>
      <div className={css(styles.logoContainer)}>
        <div className={css(styles.logo)}>
          <span className={css(styles.logoText)}>Wchat</span>
        </div>
      </div>

      <div className={css(styles.topnav__buttons)}>
        {/* icons */}

        <div className={css(styles.topnav__button)}>
          <HomeIcon />
          <span> Home</span>
        </div>
        <div className={css(styles.topnav__button)}>
          <SearchIcon />
          <span> Search</span>
        </div>
        <div className={css(styles.topnav__button)}>
          <ExploreIcon />
          <span> Explore</span>
        </div>
        <div className={css(styles.topnav__button)}>
          <ChatIcon />
          <span> Message</span>
        </div>
        
        <div className={css(styles.topnav__button)}>
          <FavoriteBorderIcon />
          <span> Notifications</span>
        </div>
        <div className={css(styles.topnav__button)}>
          <AddCircleOutlineIcon />
          <span> Create</span>
        </div>
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  Topnav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px",
    flexDirection: "row",
  },
  topnav__buttons: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: "10px",
    flexDirection: "row",
  },
    topnav__button: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginLeft: "10px",
        flexDirection: "row",
    },
});

export default Topnav;
