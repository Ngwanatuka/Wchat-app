import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const LandingPage = () => {
  return (
    <div className={css(styles.container)}>
      <div className={css(styles.leftSide)}>
        <div className={css(styles.logo)}>
          <span className={css(styles.logoText)}>Wchat</span>
        </div>
        <h1 className={css(styles.welcomeText)}>Welcome to Wchat</h1>
      </div>
      <div className={css(styles.rightSide)}>
        {/* Right side content will be added later */}
      </div>
    </div>
  );
};

// Aphrodite styles
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100vh',
  },
  leftSide: {
    flex: '1',
    padding: '20px',
    backgroundColor: '#0986CC',
    color: 'white',
    fontFamily: 'Poppins, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  logo: {
    marginBottom: '20px',
    fontSize: '2em',
  },
  logoText: {
    fontWeight: 'bold',
  },
  welcomeText: {
    fontSize: '2em',
    margin: '0',
  },
  rightSide: {
    flex: '2',
    backgroundColor: 'white',
  },
});

export default LandingPage;
