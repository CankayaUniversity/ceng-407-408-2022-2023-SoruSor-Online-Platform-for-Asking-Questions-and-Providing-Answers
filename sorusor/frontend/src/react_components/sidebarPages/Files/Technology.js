import React from "react";
import "../StyleDesigns/Technology.css";
import SidebarOptions from "../../SidebarOptions";
import Widget from "../../Widget";
import Feed from "../../Feed";
import placeholderImage from "../../../SoruSorDesign/Sidebar/technology.png";

const Technology = () => {
  return (
    <div className="Technology">
      <div className="TechnologyPageContents">
        <div className="TechnologyPageContent">
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

export default Technology;
