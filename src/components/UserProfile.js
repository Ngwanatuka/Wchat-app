import React, { useState, useRef } from 'react';
import { StyleSheet, css } from 'aphrodite';

const UserProfile = ({ userEmail }) => {
  const [knownAs, setKnownAs] = useState('');
  const [department, setDepartment] = useState('');
  const [profession, setProfession] = useState('');
  const [aboutMe, setAboutMe] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const fileInputRef = useRef(null);

  const handleNextButtonClick = () => {
    // Handle the logic for navigating to the dashboard or processing the form data
    // For now, let's log the data to the console
    console.log('Known As:', knownAs);
    console.log('Department:', department);
    console.log('Profession:', profession);
    console.log('About Me:', aboutMe);
    console.log('Profile Picture:', profilePicture);
  };

  const handleProfilePictureChange = (e) => {
    const selectedFile = e.target.files[0];
    setProfilePicture(selectedFile);
  };

  const handlePlusSignClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className={css(styles.userProfile)}>
      <div className={css(styles.profileContainer)}>
        <div className={css(styles.userInfo)}>
          <div className={css(styles.profileInfo)}>
            {/* Profile picture with plus sign icon */}
            <div className={css(styles.profilePhoto)} onClick={handlePlusSignClick}>
              {profilePicture ? (
                <>
                  <img src={URL.createObjectURL(profilePicture)} alt="Profile" />
                  <div className={css(styles.plusSign)}>+</div>
                </>
              ) : (
                <div className={css(styles.plusSignContainer)}>
                  <div className={css(styles.plusSign)}>+</div>
                </div>
              )}
            </div>
            {/* User email */}
            <h3 className={css(styles.userEmail)}>{userEmail}</h3>
          </div>
          {/* Form fields wrapped in a div with flex styles */}
          <div className={css(styles.formContainer)}>
            <label className={css(styles.formLabel)}>Known As:</label>
            <input
              type="text"
              value={knownAs}
              onChange={(e) => setKnownAs(e.target.value)}
              className={css(styles.formInput)}
            />
          </div>
          <div className={css(styles.formContainer)}>
            <label className={css(styles.formLabel)}>Department:</label>
            <input
              type="text"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              className={css(styles.formInput)}
            />
          </div>
          <div className={css(styles.formContainer)}>
            <label className={css(styles.formLabel)}>Profession:</label>
            <input
              type="text"
              value={profession}
              onChange={(e) => setProfession(e.target.value)}
              className={css(styles.formInput)}
            />
          </div>
          <div className={css(styles.formContainer)}>
            <label className={css(styles.formLabel)}>About Me:</label>
            <textarea
              value={aboutMe}
              onChange={(e) => setAboutMe(e.target.value)}
              className={css(styles.formInput)}
            />
          </div>
          {/* Next button */}
          <button className={css(styles.nextButton)} onClick={handleNextButtonClick}>
            Next
          </button>
        </div>
      </div>
      {/* Hidden file input for profile picture */}
      <input
        type="file"
        id="profilePictureInput"
        accept="image/*"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleProfilePictureChange}
      />
    </div>
  );
};

const styles = StyleSheet.create({
  userProfile: {
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'right',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#0986CC',
    fontFamily: 'Poppins, sans-serif',
  },

  profileContainer: {
    width: '65%',
    height: '100%',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 0 1rem 0 rgba(0, 0, 0, .2)',
  },

  userInfo: {
    textAlign: 'left',
  },

  profileInfo: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  },

  profilePhoto: {
    position: 'relative',
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    overflow: 'hidden',
    marginRight: '10px',
    cursor: 'pointer', // Add cursor pointer for click interaction
  },

  plusSignContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Add background for better visibility
  },

  plusSign: {
    color: 'white',
    fontSize: '1.5rem',
  },

  userEmail: {
    color: '#0986CC',
    fontSize: '1rem',
    margin: '0',
  },

  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '10px',
  },

  formLabel: {
    marginBottom: '5px',
    fontSize: '0.9rem',
  },

  formInput: {
    width: '100%',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },

  nextButton: {
    backgroundColor: '#0986CC',
    color: 'white',
    padding: '10px',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
  },
});

export default UserProfile;
