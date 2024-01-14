import React from "react";
import { StyleSheet, css } from "aphrodite-jss";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MenuIcon from "@mui/icons-material/Menu";
import CasesOutlinedIcon from '@mui/icons-material/CasesOutlined';

function sidenav() {
  return (
    <div className={css(styles.sidenav)}>
      <div className={css(styles.logoContainer)}>
        <div className={css(styles.logo)}>
        <CasesOutlinedIcon />
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
    padding: "0.625rem",
    flexDirection: "column",
    height: "100vh",
    position: "fixed",
    top: 0,
    left: 0,
  },

  logo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "1.25rem",
    marginTop: "1.25rem",
    '& svg': {
      fontSize: "4.125rem",
    },
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
    marginLeft: "0.635rem",
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
    margin: " 0.3125rem 0.635rem 0.3125rem 0.635rem",
    padding: "0.635rem 0.9375rem 0.635rem 0.9375rem",
    borderRadius: "0.9375rem",
    width: "100%",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "rgba(255, 255, 255, 0.128)",
    },
    "& span": {
      fontSize: "0.8889rem",
      fontWeight: "bold",
      marginLeft: "0.635rem",
    },
  },


});

export default sidenav;
