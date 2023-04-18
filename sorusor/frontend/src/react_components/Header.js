import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar, Button, Input } from "@mui/material";
import "./css/SoruSorHeader.css";
import { Modal } from "react-responsive-modal";
import CloseIcon from "@material-ui/icons/Close";
import "react-responsive-modal/styles.css";
import { ExpandMore, PeopleAltOutlined } from "@material-ui/icons";
import axios from "axios";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { logout, selectUser } from "../feature/userSlice";
import { useDispatch, useSelector } from "react-redux";

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputUrl, setInputUrl] = useState("");
  const [question, setQuestion] = useState("");
  const Close = <CloseIcon />;
  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  const handleSubmit = async () => {
    if (question !== "") {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const body = {
        questionName: question,
        questionUrl: inputUrl,
        user: user,
      };
      await axios
        .post("/api/questions", body, config)
        .then((res) => {
          console.log(res.data);
          alert(res.data.message);
          window.location.href = "/";
        })
        .catch((e) => {
          console.log(e);
          alert("Error in asking question");
        });
    }
  };

  const handleLogout = () => {
    if (window.confirm("Sure?")) {
      signOut(auth)
        .then(() => {
          dispatch(logout());
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
            <HomeIcon />
          </div>
          <div className="SoruSorHeaderIcon">
            <FeaturedPlayListIcon />
          </div>
          <div className="SoruSorHeaderIcon">
            <AssignmentTurnedInIcon />
          </div>
          <div className="SoruSorHeaderIcon">
            <PeopleAltIcon />
          </div>
          <div className="SoruSorHeaderIcon">
            <NotificationsIcon />
          </div>
        </div>
        <div className="SoruSorHeaderInput">
          <SearchIcon />
          <input type="text" placeholder="Search Questions" />
        </div>
        <div className="SoruSorHeaderReminder">
          <span onClick={handleLogout}>
            <Avatar src={user?.photo} />
            {/* //seeing the user photo from google */}
          </span>
        </div>
        <Button onClick={() => setIsModalOpen(true)}>Add Question</Button>
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
          <div className="modalTitle">
            <h5>Add Question</h5>
            <h5>Share Link</h5>
          </div>
          <div className="modalInfo">
            <Avatar src={user?.photo} className="avatar" />
            <div className="modalScop">
              <PeopleAltOutlined />
              <p>Public</p>
              <ExpandMore />
            </div>
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
