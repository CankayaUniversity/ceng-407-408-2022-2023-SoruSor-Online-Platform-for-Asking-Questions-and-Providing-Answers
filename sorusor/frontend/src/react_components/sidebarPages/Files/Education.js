import React from "react";
import "../StyleDesigns/Education.css";
import SidebarOptions from "../../SidebarOptions";
import Widget from "../../Widget";
import Feed from "../../Feed";
import placeholderImage from "../../../SoruSorDesign/Sidebar/education.png";

const Education = () => {
  return (
    <div className="Education">
      <div className="EducationPageContents">
        <div className="EducationPageContent">
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

export default Education;
