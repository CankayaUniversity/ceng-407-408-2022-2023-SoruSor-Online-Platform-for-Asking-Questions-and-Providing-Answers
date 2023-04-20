import React from "react";
import Header from "./Header";
import SidebarOptions from "./SidebarOptions";
import Feed from "./Feed";
import Widget from "./Widget";

import "./css/SoruSor.css";

function SoruSor() {
  return (
    <div className="SoruSor">
      <Header />
      <div className="SoruSorContents">
        <div className="SoruSorContent">
          <SidebarOptions />
          <Feed />
          <Widget />
        </div>
      </div>
    </div>
  );
}

export default SoruSor;
//5018
