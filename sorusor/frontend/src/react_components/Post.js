import {
  ArrowDownwardOutlined,
  ArrowUpwardOutlined,
  ChatBubbleOutline,
  MoreHorizOutlined,
  RepeatOneOutlined,
  ShareOutlined,
  TwitterIcon, 
  FacebookIcon, 
  InstagramIcon, 
  TiktokIcon 
} from "@material-ui/icons"; // import icons from Material UI
import { Avatar } from "@mui/material"; // import Avatar from Material UI
import React, { useState } from "react"; // import React and useState hook
import "./css/Post.css"; // import CSS file for Post component

import { Modal } from "react-responsive-modal"; // import Modal component from react-responsive-modal.
import "react-responsive-modal/styles.css"; // import CSS file for react-responsive-modal.
import CloseIcon from "@material-ui/icons/Close"; // import CloseIcon from Material UI.

import ReactQuill from "react-quill"; // import ReactQuill
import "react-quill/dist/quill.snow.css"; // import CSS file for ReactQuill

import ReactTimeAgo from "react-time-ago"; // import ReactTimeAgo component

import axios from "axios"; // import axios for making HTTP requests

import ReactHtmlParser from "html-react-parser"; // import ReactHtmlParser for parsing HTML tags
import { useSelector } from "react-redux"; // import useSelector hook from react-redux
import { selectUser } from "../feature/userSlice"; // import selectUser function from userSlice

function LastSeen({ date }) {
  // LastSeen component displays the time elapsed since a given date
  return (
    <div>
      <ReactTimeAgo date={date} locale="en-US" timeStyle="round" />
    </div>
  );
}

function Post({ post }) {
  const [isModalOpen, setIsModalOpen] = useState(false); // useState hook to manage the state of isModalOpen
  const [answer, setAnswer] = useState(""); // useState hook to manage the state of answer
  const Close = <CloseIcon />; // define Close variable as the CloseIcon component from Material UI

  onst [votes, setVotes] = useState(0);
  const [upvoteClicked, setUpvoteClicked] = useState(false);
  const [downvoteClicked, setDownvoteClicked] = useState(false);

  const handleUpvote = () => {
    setVotes(votes + 1);
    setUpvoteClicked(true);
    setDownvoteClicked(false);
  };

  const handleDownvote = () => {
    setVotes(votes - 1);
    setUpvoteClicked(false);
    setDownvoteClicked(true);
  };
  
  const handleRepeat = () => {
    // handle repeat logic here
  };

  const handleChat = () => {
    // handle chat logic here
  };

  const [showShareModal, setShowShareModal] = useState(false);

  const handleShareClick = () => {
    setShowShareModal(true);
  };

  const handlePlatformClick = (platform) => {
    // handle platform share logic here
    // using the selected platform argument
    setShowShareModal(false);
  };
  const handleMore = () => {
    // handle more options logic here
  };
  const user = useSelector(selectUser); // useSelector hook to select user data from the Redux store

  const handleQuill = (value) => {
    // handleQuill function sets the state of answer to the value passed as parameter
    setAnswer(value);
  };
  // console.log(answer);
  const handleSubmit = async () => {
    // handleSubmit function is called when the user submits an answer to a question.
    if (post?._id && answer !== "") {
      // check if the post ID and answer are valid
      const config = {
        headers: {
          "Content-Type": "application/json", // set request header to application/json
        },
      };
      const body = {
        answer: answer,
        questionId: post?._id,
        user: user,
      }; // define the body of the POST request
      await axios
        .post("/api/answers", body, config) // make a POST request to the server with the answer data.
        .then((res) => {
          console.log(res.data);
          alert("Answer added.");
          setIsModalOpen(false);
          window.location.href = "/"; // redirect to the home page after submitting the answer.
        })
        .catch((e) => {
          console.log(e);
          alert("Error occurred while adding the answer. (post.js)");
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
      <ArrowUpwardOutlined
        onClick={handleUpvote}
        className={upvoteClicked ? 'upvoted' : ''}
      />
      <span>{votes}</span>
      <ArrowDownwardOutlined
        onClick={handleDownvote}
        className={downvoteClicked ? 'downvoted' : ''}
      />
    </div>
        <RepeatOneOutlined onClick={handleRepeat} />
        <ChatBubbleOutline onClick={handleChat} /> 
        <div className="postFooterLeft">
        <ShareOutlined onClick={handleShareClick} />

      {showShareModal && (
        <div>
          <TwitterIcon onClick={() => handlePlatformClick('twitter')} />
          <FacebookIcon onClick={() => handlePlatformClick('facebook')} />
          <InstagramIcon onClick={() => handlePlatformClick('instagram')} />
          <TiktokIcon onClick={() => handlePlatformClick('tiktok')} />
        </div>
      )}
        <MoreHorizOutlined onClick={handleMore} />
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
