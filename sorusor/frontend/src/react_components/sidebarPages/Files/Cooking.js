import React from "react";
import "../StyleDesigns/Cooking.css";

import SidebarOptions from "../../SidebarOptions";
import Widget from "../../Widget";
import Feed from "../../Feed";

const Cooking = () => {
  return (
    <div className="cooking">
      <div className="cookingPageContents">
        <div className="cookingPageContent">
          <SidebarOptions />
          <div className="feed-placeholder" />
          <Widget />
        </div>
      </div>
    </div>
  );
};

export default Cooking;
