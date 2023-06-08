import React from "react";
import "../StyleDesigns/Technology.css";
import SidebarOptions from "../../SidebarOptions";
import Widget from "../../Widget";
import Feed from "../../Feed";

const Technology = () => {
  return (
    <div className="Technology">
      <div className="TechnologyPageContents">
        <div className="TechnologyPageContent">
          <SidebarOptions />
          <Widget />
        </div>
      </div>
    </div>
  );
};

export default Technology;
