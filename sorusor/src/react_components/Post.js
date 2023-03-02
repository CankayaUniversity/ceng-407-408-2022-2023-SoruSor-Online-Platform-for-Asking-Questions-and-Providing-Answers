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
      <p>1 Answer</p>
      <div className="postAnswer">
        <div className="postAnswerContainer">
          <div className="postAnswered">
            <Avatar />
            <div className="postAnswered-Info">
              <p>Username</p>
              <span>Timestamp</span>
            </div>
          </div>
          <div className="postAnswer-Answer">Test Answer</div>;
        </div>
      </div>
    </div>
  );
}

export default Post;
