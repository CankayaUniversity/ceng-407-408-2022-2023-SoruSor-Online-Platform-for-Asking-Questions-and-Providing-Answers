import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar, Button } from "@mui/material";
import "./css/SoruSorHeader.css";
function Header() {
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
        <Button>Add Question</Button>
      </div>
    </div>
  );
}

export default Header;
