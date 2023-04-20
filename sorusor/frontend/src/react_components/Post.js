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

import axios from "axios";

import ReactHtmlParser from "html-react-parser";
import { useSelector } from "react-redux";
import { selectUser } from "../feature/userSlice";

function LastSeen({ date }) {
  return (
    <div>
      <ReactTimeAgo date={date} locale="en-US" timeStyle="round" />
    </div>
  );
}

function Post({ post }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [answer, setAnswer] = useState("");
  const Close = <CloseIcon />;

  const user = useSelector(selectUser);

  const handleQuill = (value) => {
    setAnswer(value);
  };



  const handleSubmit = async () => {
    if (post?._id && answer !== "") {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = {
        answer: answer,
        questionId: post?._id,
        user: user,
      };
      await axios
        .post("/api/answers", body, config)
        .then((res) => {
          console.log(res.data);
          alert("Answer added.");
          setIsModalOpen(false);
          window.location.href = "/";
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  return (
    <div className="post">
      <div className="postInfo">
        <Avatar src={post?.user?.photo} />
        <h4>{post?.user?.userName}</h4>

        <small>
          <LastSeen date={post?.createdAt} />
        </small>
      </div>
      <div className="postBody">
        <div className="post__question">
          <p>{post?.questionName}</p>
          <button
            onClick={() => {
              setIsModalOpen(true);
              console.log(post?._id);
            }}
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
                Asked by <span className="name">{post?.user?.userName}</span> on{" "}
                <span className="name">
                  {new Date(post?.createdAt).toLocaleString()}
                </span>{" "}
              </p>
            </div>
            <div className="modalAnswer">
              <ReactQuill
                value={answer}
                onChange={handleQuill}
                placeholder="Type Your Answer"
              />
            </div>
            <div className="modalButtons">
              {" "}
              <button className="cancel" onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
              <button onClick={handleSubmit} type="submit" className="add">
                Add Answer
              </button>
            </div>
          </Modal>
        </div>
        {post.questionUrl !== "" && <img src={post.questionUrl} alt="url" />}
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
        {post?.allAnswers.length} Answers
      </p>
      <div
        style={{
          margin: "5px 0px 0px 0px ",
          padding: "5px 0px 0px 20px",
          borderTop: "1px solid lightgray",
        }}
        className="postAnswer"
      >
        {post?.allAnswers?.map((_a) => (
          <>
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
                <Avatar src={_a?.user?.photo} />
                <div
                  style={{
                    margin: "0px 10px",
                  }}
                  className="postAnswered-Info"
                >
                  <p>{_a?.user?.userName}</p>
                  <span>
                    <LastSeen date={_a?.createdAt}></LastSeen>
                  </span>
                </div>
              </div>
              <div className="postAnswer-Answer">
                {ReactHtmlParser(_a?.answer)}
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default Post;
