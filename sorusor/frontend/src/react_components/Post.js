import {
  ArrowDownwardOutlined,
  ArrowUpwardOutlined,
  ChatBubbleOutline,
  MoreHorizOutlined,
  RepeatOneOutlined,
  ShareOutlined,
} from "@material-ui/icons";
import { Avatar } from "@mui/material";
import React, { useState } from "react";
import "./css/Post.css";

import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import CloseIcon from "@material-ui/icons/Close";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import ReactTimeAgo from "react-time-ago";

function LastSeen({ date }) {
  return (
    <div>
      <ReactTimeAgo date={date} locale="en-US" timeStyle="round" />
    </div>
  );
}

function Post({ post }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const Close = <CloseIcon />;

  return (
    <div className="post">
      <div className="postInfo">
        <Avatar />
        <h4>User Name</h4>

        <small>
          <LastSeen date={post?.createdAt} />
        </small>
      </div>
      <div className="postBody">
        <div className="post__question">
          <p>{post?.questionName}</p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="postBtnAnswer"
          >
            Answer
          </button>
          <Modal
            open={isModalOpen}
            closeIcon={Close}
            onClose={() => setIsModalOpen(false)}
            closeOnEsc
            center
            closeOnOverlayClick={false}
            styles={{
              overlay: {
                height: "auto",
              },
            }}
          >
            <div className="modalQuestion">
              <h1>{post?.questionName}</h1>
              <p>
                Asked by <span className="name">Username</span> on{" "}
                <span className="name">
                  {new Date(post?.createdAt).toLocaleString()}
                </span>{" "}
              </p>
            </div>
            <div className="modalAnswer">
              <ReactQuill placeholder="Type Your Answer" />
            </div>
            <div className="modalButtons">
              {" "}
              <button className="cancel" onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
              <button type="submit" className="add">
                Add Question
              </button>
            </div>
          </Modal>
        </div>
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
        {post?.allAnswers.length}
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

//40.00
