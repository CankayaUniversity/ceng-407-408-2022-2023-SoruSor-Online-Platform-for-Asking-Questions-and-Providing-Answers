import React from "react";
import "../StyleDesigns/History.css";
import SidebarOptions from "../../SidebarOptions";
import placeholderImage from "../../../SoruSorDesign/Sidebar/history.png";
import Widget from "../../Widget";
import Feed from "../../Feed";

const History = () => {
  return (
    <div className="History">
      <div className="HistoryPageContents">
        <div className="HistoryPageContent">
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

export default History;
