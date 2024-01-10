// PostDisplay.js
import React from "react";
import { StyleSheet, css } from "aphrodite";

const PostDisplay = ({ post }) => {
  return (
    <div className={css(styles.postDisplay)}>
      {/* Display post content, images, videos, etc. */}
      <p>{post.content}</p>

      {/* Like and Comment buttons */}
      <div className={css(styles.actionButtons)}>
        <button className={css(styles.likeButton)}>Like</button>
        <button className={css(styles.commentButton)}>Comment</button>
      </div>
    </div>
  );
};

const styles = StyleSheet.create({
  postDisplay: {
    border: "1px solid #ddd",
    padding: "10px",
    marginBottom: "10px",
  },
  actionButtons: {
    marginTop: "10px",
  },
  likeButton: {
    marginRight: "10px",
    backgroundColor: "#0986CC",
    color: "white",
    border: "none",
    padding: "8px",
    borderRadius: "4px",
    cursor: "pointer",
  },
  commentButton: {
    backgroundColor: "#ddd",
    color: "#333",
    border: "none",
    padding: "8px",
    borderRadius: "4px",
    cursor: "pointer",
  },
});

export default PostDisplay;
