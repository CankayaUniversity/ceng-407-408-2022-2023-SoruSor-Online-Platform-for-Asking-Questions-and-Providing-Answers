import React from "react";
import "../StyleDesigns/Cooking.css";
import placeholderImage from "../../../SoruSorDesign/Sidebar/cooking.png";

import SidebarOptions from "../../SidebarOptions";
import Widget from "../../Widget";
import Feed from "../../Feed";

const Cooking = () => {
  return (
    <div className="cooking">
      <div className="cookingPageContents">
        <div className="cookingPageContent">
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

export default Cooking;
