import React from "react";
import QuestionBox from "./QuestionBox";
import "./css/Feed.css";
import Post from "./Post";

function Feed() {
  return (
    <div className="feed">
      <QuestionBox />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Feed;
