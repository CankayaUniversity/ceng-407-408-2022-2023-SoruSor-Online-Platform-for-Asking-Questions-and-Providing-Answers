import React from "react";
import "../StyleDesigns/Science.css";
import SidebarOptions from "../../SidebarOptions";
import Widget from "../../Widget";
import Feed from "../../Feed";
import placeholderImage from "../../../SoruSorDesign/Sidebar/science.png";

const Science = () => {
  return (
    <div className="Science">
      <div className="SciencePageContents">
        <div className="SciencePageContent">
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

export default Science;
