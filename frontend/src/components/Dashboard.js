// Dashboard.js

import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const Dashboard = ({ userName, department, profession, aboutMe }) => {
  return (
    <div className={css(styles.dashboard)}>
      <div className={css(styles.welcomeMessage)}>
        <p>Welcome to Wchat, {userName}!</p>
        <p>Feel free to explore and connect with your colleagues.</p>
      </div>
      <div className={css(styles.userInfo)}>
        <h2>Your Profile Information</h2>
        <div className={css(styles.infoItem)}>
          <span className={css(styles.infoLabel)}>Known as:</span>
          <span className={css(styles.infoValue)}>{userName}</span>
        </div>
        <div className={css(styles.infoItem)}>
          <span className={css(styles.infoLabel)}>Department:</span>
          <span className={css(styles.infoValue)}>{department}</span>
        </div>
        <div className={css(styles.infoItem)}>
          <span className={css(styles.infoLabel)}>Profession:</span>
          <span className={css(styles.infoValue)}>{profession}</span>
        </div>
        <div className={css(styles.infoItem)}>
          <span className={css(styles.infoLabel)}>About Me:</span>
          <span className={css(styles.infoValue)}>{aboutMe}</span>
        </div>
      </div>
    </div>
  );
};

const styles = StyleSheet.create({
  dashboard: {
    padding: '20px',
    fontFamily: 'Poppins, sans-serif',
  },
  welcomeMessage: {
    marginBottom: '20px',
  },
  userInfo: {
    border: '1px solid #ccc',
    padding: '20px',
    borderRadius: '8px',
  },
  infoItem: {
    marginBottom: '10px',
  },
  infoLabel: {
    fontWeight: 'bold',
    marginRight: '10px',
  },
  infoValue: {},
});

export default Dashboard;
