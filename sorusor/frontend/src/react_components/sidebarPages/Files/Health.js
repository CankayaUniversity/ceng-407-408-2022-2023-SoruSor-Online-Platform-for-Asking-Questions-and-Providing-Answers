import React from "react";
import "../StyleDesigns/Health.css";
import SidebarOptions from "../../SidebarOptions";
import Widget from "../../Widget";
import Feed from "../../Feed";

const Health = () => {
  return (
    <div className="Health">
      <div className="HealthPageContents">
        <div className="HealthPageContent">
          <SidebarOptions />
          <Widget />
        </div>
      </div>
    </div>
  );
};

export default Health;
