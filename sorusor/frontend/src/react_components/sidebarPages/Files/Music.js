import React from "react";
import "../StyleDesigns/Music.css";
import SidebarOptions from "../../SidebarOptions";
import Widget from "../../Widget";
import placeholderImage from "../../../SoruSorDesign/Sidebar/music.png";

import Feed from "../../Feed";

const Music = () => {
  return (
    <div className="Music">
      <div className="MusicPageContents">
        <div className="MusicPageContent">
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

export default Music;
