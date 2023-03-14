import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar, Button } from "@mui/material";
import "./css/SoruSorHeader.css";
import { Modal } from "react-responsive-modal";
import CloseIcon from "@material-ui/icons/Close";
import "react-responsive-modal/styles.css";
import { ExpandMore, PeopleAltOutlined } from "@material-ui/icons";

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const Close = <CloseIcon />;

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
        </Modal>
      </div>
    </div>
  );
}

export default Header;
