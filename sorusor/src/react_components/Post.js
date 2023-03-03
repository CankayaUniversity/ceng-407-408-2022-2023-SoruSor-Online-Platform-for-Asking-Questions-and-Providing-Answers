import {
  ArrowDownwardOutlined,
  ArrowUpwardOutlined,
  ChatBubbleOutline,
  MoreHorizOutlined,
  RepeatOneOutlined,
  ShareOutlined,
} from "@material-ui/icons";
import { Avatar } from "@mui/material";
import React from "react";
import "./css/Post.css";

function Post() {
  return (
    <div className="post">
      <div className="postInfo">
        <Avatar />
        <h4>User Name</h4>
        <small>Time Stamp</small>
      </div>
      <div className="postBody">
        <p>Test Question?</p>
        <button className="postBtnAnswer">Answer</button>
      </div>
      <div className="postFooter">
        <div className="postFooterActions">
          <ArrowUpwardOutlined />
          <ArrowDownwardOutlined />
        </div>
        <RepeatOneOutlined />
        <ChatBubbleOutline />
        <div className="postFooterLeft">
          <ShareOutlined />
          <MoreHorizOutlined />
        </div>
      </div>
      <p
        style={{
          color: "rgba(0,0,0,0.5)",
          fontSize: "12px",
          fontWeight: "bold",
          margin: "10px 0",
        }}
      >
        1 Answer
      </p>
      <div
        style={{
          margin: "5px 0px 0px 0px ",
          padding: "5px 0px 0px 20px",
          borderTop: "1px solid lightgray",
        }}
        className="postAnswer"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            padding: "10px 5px",
            borderTop: "1px solid lightgray",
          }}
          className="postAnswerContainer"
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
              fontSize: "12px",
              fontWeight: 600,
              color: "#888",
            }}
            className="postAnswered"
          >
            <Avatar />
            <div
              style={{
                margin: "0px 10px",
              }}
              className="postAnswered-Info"
            >
              <p>Username</p>
              <span>Timestamp</span>
            </div>
          </div>
          <div className="postAnswer-Answer">Test Answer</div>
        </div>
      </div>
    </div>
  );
}

export default Post;
