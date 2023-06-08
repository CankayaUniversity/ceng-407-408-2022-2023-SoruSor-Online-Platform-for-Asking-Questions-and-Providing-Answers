import React from "react";
import "../StyleDesigns/Education.css";
import SidebarOptions from "../../SidebarOptions";
import Widget from "../../Widget";
import Feed from "../../Feed";

const Education = () => {
  return (
    <div className="Education">
      <div className="EducationPageContents">
        <div className="EducationPageContent">
          <SidebarOptions />
          <div className="feed-placeholder" />
          <Widget />
        </div>
      </div>
    </div>
  );
};

export default Education;
