import React from "react";
import "../StyleDesigns/Psychology.css";
import SidebarOptions from "../../SidebarOptions";
import Widget from "../../Widget";
import Feed from "../../Feed";

const Psychology = () => {
  return (
    <div className="Psychology">
      <div className="PsychologyPageContents">
        <div className="PsychologyPageContent">
          <SidebarOptions />
          <Widget />
        </div>
      </div>
    </div>
  );
};

export default Psychology;
