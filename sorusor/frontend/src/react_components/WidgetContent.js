import React from "react";
import "./css/WidgetContent.css";

import gameImage from "../../src/SoruSorDesign/WidgetDesign/gameHotCommunity.png";
import gameImage2 from "../../src/SoruSorDesign/WidgetDesign/trophy.png";
import gameImage3 from "../../src/SoruSorDesign/WidgetDesign/cankaya.png";

function WidgetContent() {
  return (
    <div className="widget_Contents">
      <div className="widget_Content">
        <div className="contentContainer">
          {" "}
          {}
          <div className="imageContainer">
            {" "}
            <img src={gameImage} alt="Game" className="gameImage" />{" "}
          </div>
          <div className="widget_ContentTitle">
            <h5>Mobile Game Programmers</h5>
            <p>Best Mobile Game Community Ever!</p>
          </div>
        </div>
      </div>
      <div className="widget_Content">
        <div className="contentContainer">
          {" "}
          {}
          <div className="imageContainer">
            {" "}
            <img src={gameImage2} alt="Game" className="gameImage" />{" "}
          </div>
          <div className="widget_ContentTitle">
            <h5>Champions League Final</h5>
            <p>Who's it gonna be this year?</p>
          </div>
        </div>
      </div>
      <div className="widget_Content">
        <div className="contentContainer">
          {" "}
          {}
          <div className="imageContainer">
            {" "}
            <img src={gameImage3} alt="Game" className="gameImage" />{" "}
          </div>
          <div className="widget_ContentTitle">
            <h5>Cankaya UNI LOVERS</h5>
            <p>We Love Cankaya Uni!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WidgetContent;
