import React from "react";
import Topnav from "./navigation/Topnav";
import Timeline from "./timeline/Timeline";
import Suggestions from "./timeline/Suggestions";
import { StyleSheet, css } from "aphrodite";
import "./styles/font.css";

function Homepage() {
  return (
    <div className={css(styles.homepage)}>
      <div className={css(styles.homepage__nav)}>
        <Topnav />
      </div>
      <div className={css(styles.homepage__content)}>
       
        <div className={css(styles.homepage__timeline)}>
          <Timeline />
        </div>
        <div className={css(styles.homepage__suggestions)}>
          <Suggestions />
          </div>
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  homepage: {
    display: "flex",
    flexDirection: "column",
    margin: "0",
  },
  homepage__nav: {
    backgroundColor: "#0986CC",
    width: "100%",
    height: "60px",
    display: "flex",
    alignItems: "center",
    color: "white",
  },
  homepage__content: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
  },
  homepage__timeline: {
    flex: "0.7",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
});

export default Homepage;
