import React from "react";
import "../StyleDesigns/DiscoverSpaces.css";
import SidebarOptions from "../../SidebarOptions";
import Widget from "../../Widget";
import Feed from "../../Feed";

const DiscoverSpaces = () => {
  return (
    <div className="DiscoverSpaces">
      <div className="DiscoverSpacesPageContents">
        <div className="DiscoverSpacesPageContent">
          <SidebarOptions />
          <Widget />
        </div>
      </div>
    </div>
  );
};

export default DiscoverSpaces;
