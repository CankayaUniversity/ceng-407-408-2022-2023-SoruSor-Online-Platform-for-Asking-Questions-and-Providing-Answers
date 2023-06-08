import React from "react";
import "../StyleDesigns/Science.css";
import SidebarOptions from "../../SidebarOptions";
import Widget from "../../Widget";
import Feed from "../../Feed";

const Science = () => {
  return (
    <div className="Science">
      <div className="SciencePageContents">
        <div className="SciencePageContent">
          <SidebarOptions />
          <div className="feed-placeholder" />

          <Widget />
        </div>
      </div>
    </div>
  );
};

export default Science;
