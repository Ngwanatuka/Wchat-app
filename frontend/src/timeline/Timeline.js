import React from "react";
import { StyleSheet, css } from "aphrodite";
import Suggestions from "./Suggestions";

function Timeline() {
  return (
    <div className={css(styles.timeline)}>
      <div className={css(styles.timeline__left)}>timeline</div>
      <div className={css(styles.timeline__right)}>
        <Suggestions />
      </div>
    </div>
  );
}

const styles = StyleSheet.create({

    timeline: {
        display: 'flex',
        flexDirection: 'row',
    },
    timeline__left: {
        flex: '0.7',
        
    },

    timeline__right: {
        flex: '0.3',
    },
});

export default Timeline;
