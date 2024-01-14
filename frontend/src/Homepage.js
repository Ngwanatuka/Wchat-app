import React from "react";
import Sidenav from "./navigation/Sidenav";
import Timeline from "./timeline/Timeline";
import Suggestions from "./timeline/Suggestions";
import { StyleSheet, css } from "aphrodite";
import "./styles/font.css";

function Homepage() {
  return (
    <div className={css(styles.homepage)}>
      <div className={css(styles.homepage__nav)}>
        <Sidenav />
      </div>

      <div className={css(styles.homepage__timeline)}>
        <Timeline />
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  homepage: {
    display: "flex",
    flexDirection: "row",
    margin: "0",
  },
  homepage__nav: {
    backgroundColor: "#0986CC",
    flex: "0.2",
    display: "flex",
    alignItems: "center",
    color: "white",
  },

  homepage__timeline: {
    flex: "0.8",
    display: "flex",
    flexDirection: "column",
  },
});

export default Homepage;
