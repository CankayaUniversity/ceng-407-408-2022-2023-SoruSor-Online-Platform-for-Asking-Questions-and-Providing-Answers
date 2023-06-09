import React from "react";
import "../StyleDesigns/Psychology.css";
import SidebarOptions from "../../SidebarOptions";
import Widget from "../../Widget";
import Feed from "../../Feed";
import placeholderImage from "../../../SoruSorDesign/Sidebar/psychology.png";

const Psychology = () => {
  return (
    <div className="Psychology">
      <div className="PsychologyPageContents">
        <div className="PsychologyPageContent">
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

export default Psychology;
