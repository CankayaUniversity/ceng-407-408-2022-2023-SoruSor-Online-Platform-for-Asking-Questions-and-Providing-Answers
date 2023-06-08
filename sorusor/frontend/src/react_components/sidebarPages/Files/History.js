import React from "react";
import "../StyleDesigns/History.css";
import SidebarOptions from "../../SidebarOptions";
import Widget from "../../Widget";
import Feed from "../../Feed";

const History = () => {
  return (
    <div className="History">
      <div className="HistoryPageContents">
        <div className="HistoryPageContent">
          <SidebarOptions />
          <Widget />
        </div>
      </div>
    </div>
  );
};

export default History;
