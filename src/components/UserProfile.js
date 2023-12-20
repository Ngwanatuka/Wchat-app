// UserProfile.js

import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const UserProfile = ({ userEmail }) => {
  return (
    <div className={css(styles.userProfile)}>
      <h2>Welcome, {userEmail}!</h2>
      {/* Add more user information or actions here */}
    </div>
  );
};

const styles = StyleSheet.create({
  userProfile: {
    textAlign: 'center',
    marginTop: '2rem',
  },
});

export default UserProfile;
