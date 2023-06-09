import React from "react";
import "../StyleDesigns/Health.css";
import SidebarOptions from "../../SidebarOptions";
import placeholderImage from "../../../SoruSorDesign/Sidebar/health.png";
import Widget from "../../Widget";
import Feed from "../../Feed";

const Health = () => {
  return (
    <div className="Health">
      <div className="HealthPageContents">
        <div className="HealthPageContent">
          <SidebarOptions />
          <div
            className="feed-placeholder"
            style={{ backgroundImage: `url(${placeholderImage})` }}
          />
          <Widget />
        </div>
      </div>
    </div>
  );
};

export default Health;
