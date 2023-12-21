// UserProfile.js

import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const UserProfile = ({ userEmail }) => {
  return (
    <div className={css(styles.userProfile)}>
      <div className={css(styles.profileContainer)}>
        <h2>{userEmail}</h2>
      </div>
    </div>
  );
};

const styles = StyleSheet.create({
  userProfile: {
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },

  profileContainer: {
    width: '50%',
    height: '100%',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 0 1rem 0 rgba(0, 0, 0, .2)',
  }
});

export default UserProfile;
