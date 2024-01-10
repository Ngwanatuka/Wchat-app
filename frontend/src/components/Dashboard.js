import React, { useState } from "react";
import { StyleSheet, css } from "aphrodite";
import DashboardHeader from "./DashboardHeader";
import Post from "./Post";
import PostDisplay from "./PostDisplay";

const Dashboard = () => {
  // State management for posts
  const [posts, setPosts] = useState([]);

  // Function to handle post submission
  const handlePostSubmit = (postContent, selectedFile) => {
    // Create a new post object
    const newPost = {
      id: posts.length + 1,
      content: postContent,
      file: selectedFile,
    };

    // Update the posts state
    setPosts([...posts, newPost]);
  };

  return (
    <div className={css(styles.dashboard)}>
      <DashboardHeader />

      <Post onPostSubmit={handlePostSubmit} />
      {/* Map through posts and render PostDisplay for each */}
      {posts.map((post) => (
        <PostDisplay key={post.id} post={post} />
      ))}
    </div>
  );
};

const styles = StyleSheet.create({
  dashboard: {
    fontFamily: "Poppins, sans-serif",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
    backgroundColor: "F1F1F1",
  },
  mainContent: {
    padding: "20px",
  },
  welcomeMessage: {
    marginBottom: "20px",
  },
});

export default Dashboard;
