import { Add } from "@material-ui/icons";
import React from "react";
import "./css/SidebarOptions.css";

import business from "../../src/SoruSorDesign/Communities/business.png";
import cooking from "../../src/SoruSorDesign/Communities/cooking.png";
import education from "../../src/SoruSorDesign/Communities/education.png";
import health from "../../src/SoruSorDesign/Communities/health.png";
import history from "../../src/SoruSorDesign/Communities/history.png";
import movies from "../../src/SoruSorDesign/Communities/movies.png";
import music from "../../src/SoruSorDesign/Communities/music.png";
import psychology from "../../src/SoruSorDesign/Communities/psychology.png";
import science from "../../src/SoruSorDesign/Communities/science.png";
import technology from "../../src/SoruSorDesign/Communities/technology.png";
import discovercommunities from "../../src/SoruSorDesign/Communities/discovercommunities.png";

function SidebarOptions() {
  return (
    <div className="sidebarOptions">
      <div className="sidebarOption">
        <img src={history} alt="" />
        <p>History</p>
      </div>

      <div className="sidebarOption">
        <img src={business} alt="" />

        <p>Business</p>
      </div>
      <div className="sidebarOption">
        <img src={psychology} alt="" />
        <p>Psychology</p>
      </div>

      <div className="sidebarOption">
        <img src={cooking} alt="" />
        <p>Cooking</p>
      </div>

      <div className="sidebarOption">
        <img src={music} alt="" />
        <p>Music</p>
      </div>

      <div className="sidebarOption">
        <img src={science} alt="" />
        <p>Science</p>
      </div>

      <div className="sidebarOption">
        <img src={health} alt="" />
        <p>Health</p>
      </div>

      <div className="sidebarOption">
        <img src={movies} alt="" />
        <p>Movies</p>
      </div>

      <div className="sidebarOption">
        <img src={technology} alt="" />
        <p>Technology</p>
      </div>

      <div className="sidebarOption">
        <img src={education} alt="" />
        <p>Education</p>
      </div>
      <div className="sidebarOption">
        <img src={discovercommunities} alt="" />
        <p className="text">Discover Spaces</p>
      </div>
    </div>
  );
}

export default SidebarOptions;
