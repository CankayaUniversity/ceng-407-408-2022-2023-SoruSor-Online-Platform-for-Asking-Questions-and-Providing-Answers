import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar, Button, Input } from "@mui/material";
import "./css/SoruSorHeader.css";
import { Modal } from "react-responsive-modal";
import CloseIcon from "@material-ui/icons/Close";
import "react-responsive-modal/styles.css";
import { ExpandMore, PeopleAltOutlined } from "@material-ui/icons";
import axios from "axios";
import { auth } from "../firebase"; // Firebase authentication module
import { signOut } from "firebase/auth"; // Firebase signOut function
import { logout, selectUser } from "../feature/userSlice"; 
import { useDispatch, useSelector } from "react-redux"; 

import { Link } from "react-router-dom";

function Header() {
  // Local state for handling modal visibility and form input values
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputUrl, setInputUrl] = useState("");
  const [question, setQuestion] = useState("");
  const Close = <CloseIcon />;

  const dispatch = useDispatch(); // Redux dispatch function
  const user = useSelector(selectUser); 

  // Function to handle form submission when user adds a new question
  const handleSubmit = async () => {
    if (question !== "") { // Ensure question is not empty
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const body = {
        questionName: question,
        questionUrl: inputUrl,
        user: user, // Include user object in request body
      };
      await axios
        .post("/api/questions", body, config) // Send POST request to backend  to add new question
        .then((res) => {
          console.log(res.data);
          alert(res.data.message); // Display success message to user
          window.location.href = "/"; // Reload the page to show new question
        })
        .catch((e) => {
          console.log(e);
          alert("Error in asking question!"); // Display error message to user
        });
    }
  };

  // Function to handle user logout
  const handleLogout = () => {
    if (window.confirm("Sure?")) { // Prompt user to confirm logout action
      signOut(auth) // Call Firebase signOut function
        .then(() => {
          dispatch(logout()); // Dispatch Redux action to reset user state
          console.log("Logged Out");
        })
        .catch(() => {
          console.log("ERROR LOGOUT");
        });
    }
  };

  return (
    <div className="SoruSorHeader">
      <div className="SoruSorHeaderContent">
        <div className="SoruSorHeaderLogo">
          <img src="" />
        </div>
        <div className="SoruSorHeaderIcons">
          <div className="SoruSorHeaderIcon">
            <Link to="/">
              <HomeIcon />
            </Link>
          </div>
          <div className="SoruSorHeaderIcon">
            <Link to="/featured-playlist">
              <FeaturedPlayListIcon />
            </Link>
          </div>
          <div className="SoruSorHeaderIcon">
            <Link to="/assignment">
              <AssignmentTurnedInIcon />
            </Link>
          </div>
          <div className="SoruSorHeaderIcon">
            <Link to="/people">
              <PeopleAltIcon />
            </Link>
          </div>
        </div>
        <div className="SoruSorHeaderInput">
          <SearchIcon />
          <input type="text" placeholder="Search Questions" />
        </div>
        <div className="SoruSorHeaderReminder">
          <span onClick={handleLogout}>
            <Avatar src={user?.photo} />
            {/* //seeing the user photo from google.*/}
          </span>
        </div>
        <button
          className="addQuestionButton"
          onClick={() => setIsModalOpen(true)}
        >
          Add Question
        </button>
        <Modal
          open={isModalOpen}
          closeIcon={Close}
          onClose={() => setIsModalOpen(false)}
          closeOnEsc
          center
          closeOnOverlayClick={false}
          classNames={{
            modal: "customModal",
          }}
          styles={{
            overlay: {
              height: "auto",
            },
          }}
        >
          <div className="modalTitle">
            <h5>Add Question</h5>
            <h5>Share Link</h5>
          </div>
          <div className="modalInfo">
            <Avatar src={user?.photo} className="avatar" />
          </div>
          <div className="modalField">
            <Input
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              type="text"
              placeholder="Use what, how, why, etc. to begin your question."
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <input
                type="text"
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                style={{
                  margin: "5px 0",
                  border: "1px solid lightgray",
                  padding: "10px",
                  outline: "2px solid #000",
                }}
                placeholder="Add a link that provides context, if desired."
              />
              {inputUrl !== "" && (
                <img
                  style={{
                    height: "40vh",
                    objectFit: "contain",
                  }}
                  src={inputUrl}
                  alt="displayimage"
                />
              )}
            </div>
          </div>
          <div className="modalButtons">
            <button className="cancel" onClick={() => setIsModalOpen(false)}>
              Cancel
            </button>
            <button onClick={handleSubmit} type="submit" className="add">
              Add Question
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default Header;
