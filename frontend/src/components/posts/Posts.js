import React from "react";
import "./posts.scss";
import Post from "../post/Post";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";

function Posts() {



  return <div className="posts">
    {posts.map(post=> (
       <Post post={post} key={post.id}/>
    ))}
  </div>;
}

export default Posts;
