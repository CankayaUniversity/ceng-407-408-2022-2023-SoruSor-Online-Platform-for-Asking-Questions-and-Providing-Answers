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

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputUrl, setInputUrl] = useState("");
  const [question, setQuestion] = useState("");
  const Close = <CloseIcon />;

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
      };
      await axios
        .post("/api/questions", body, config)
        .then((res) => {
          console.log(res.data);
          alert(res.data.message);
        })
        .catch((e) => {
          console.log(e);
          alert("Error in adding question");
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
          <Avatar />
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
            <Avatar className="avatar" />
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
