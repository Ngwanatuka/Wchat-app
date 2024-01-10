// Post.js
import React, { useState, useRef } from 'react';
import { StyleSheet, css } from 'aphrodite';

const Post = () => {
  const [postContent, setPostContent] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handlePostContentChange = (e) => {
    setPostContent(e.target.value);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handlePlusSignClick = () => {
    fileInputRef.current.click();
  };

  const handlePostSubmit = () => {
    // Perform the logic for submitting the post
    // You can send the post content and the selected file to your backend or handle it as needed

    // Reset form after submission
    setPostContent('');
    setSelectedFile(null);
  };

  return (
    <div className={css(styles.postContainer)}>
      <textarea
        placeholder="What's on your mind?"
        value={postContent}
        onChange={handlePostContentChange}
        className={css(styles.postInput)}
      />
      <div className={css(styles.attachContainer)}>
        <div
          className={css(styles.attachIcon)}
          onClick={handlePlusSignClick}
        >
          {selectedFile ? (
            // Display the selected file (image, video, etc.)
            <img
              src={URL.createObjectURL(selectedFile)}
              alt="Attached media"
              className={css(styles.attachedMedia)}
            />
          ) : (
            // Display an icon or placeholder for attaching media
            <div className={css(styles.plusSignContainer)}>
              <div className={css(styles.plusSign)}>+</div>
            </div>
          )}
        </div>
        <input
          type="file"
          id="fileInput"
          accept="image/*, video/*"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
      </div>
      <button
        className={css(styles.postButton)}
        onClick={handlePostSubmit}
        disabled={!postContent && !selectedFile}
      >
        Post
      </button>
    </div>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '20px',
    width:'27.3125rem',
    height: '5.1875rem',
    flexShrink: '0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  postInput: {
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    resize: 'none',
    width:'19.5rem',
    height:'2.5625rem',
    flexShrink: '0',
  },
  attachContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',

  },
  attachIcon: {
    position: 'relative',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    overflow: 'hidden',
    cursor: 'pointer',
    marginRight: '10px',
    background: '#ddd',
  },
  plusSignContainer: {
    position: 'absolute',
    bottom: '0',
    right: '0',
    background: '#0986CC',
    color: 'white',
    borderRadius: '50%',
    width: '20px',
    height: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusSign: {
    fontSize: '1.5rem',
  },
  attachedMedia: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  postButton: {
    backgroundColor: '#0986CC',
    color: 'white',
    border: 'none',
    padding: '10px',
    borderRadius: '4px',
    cursor: 'pointer',
    width: '4.9375rem',
    height: '2.375rem',
  },
});

export default Post;
