import React from "react";
import "../StyleDesigns/Business.css";
import SidebarOptions from "../../SidebarOptions";
import Widget from "../../Widget";
import placeholderImage from "../../../SoruSorDesign/Sidebar/business.png";

const Business = () => {
  return (
    <div className="Business">
      <div className="BusinessPageContents">
        <div className="BusinessPageContent">
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

export default Business;
