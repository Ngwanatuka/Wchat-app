import React from "react";
import '../styles/font.css';
import { StyleSheet, css } from "aphrodite";

const Body = () => {
  return (
    <div className={css(styles.body)}>
      <div className={css(styles.leftContainer)}>
        <div className={css(styles.leftContainerContent)}>
          <h1 className={css(styles.leftContainerContentHeader)}>
            Welcome to Wchat where productivity lives!
          </h1>
        </div>
      </div>
      <div className={css(styles.rightContainer)}>

      </div>
    </div>
  );
};

const styles = StyleSheet.create({
    body: {
        display: 'flex',
        width: '100%',
        height: 'calc(100vh - 60px)',
        backgroundColor: '#F1F1F1',
    },
    leftContainer: {
        display: 'flex',
        width: '35%',
        height: '100%',
        backgroundColor: '#0986CC',
        flexShrink: '0',
        alignContent: 'center',
        justifyContent: 'center',
    },
    leftContainerContent: {
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',

    },
    leftContainerContentHeader: {
        width: '14rem',
        height: '6.25rem',
        color: 'white',
        fontSize: '2rem',
        margin: '0',
        textAlign: 'center',
        fontWeight: '500',
        lineHeight: 'normal',
        fontSize: '1.5rem',
        fontStyle: 'normal',
        textAlign: 'center',
    },
    rightContainer: {
        flex: '1',
        backgroundColor: 'white',
    },
});

export default Body;