import React from "react";
import "../StyleDesigns/Business.css";
import SidebarOptions from "../../SidebarOptions";
import Widget from "../../Widget";
import Feed from "../../Feed";

const Business = () => {
  return (
    <div className="Business">
      <div className="BusinessPageContents">
        <div className="BusinessPageContent">
          <SidebarOptions />
          <Widget />
        </div>
      </div>
    </div>
  );
};

export default Business;
