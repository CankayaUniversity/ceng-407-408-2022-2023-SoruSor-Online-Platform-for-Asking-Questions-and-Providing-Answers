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

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

function SidebarOptions() {
  return (
    <div className="sidebarOptions">
      <Link to="/history">
        <div className="sidebarOption">
          <img src={history} alt="" />
          <p>History</p>
        </div>
      </Link>

      <Link to="/business">
        <div className="sidebarOption">
          <img src={business} alt="" />
          <p>Business</p>
        </div>
      </Link>

      <Link to="/psychology">
        <div className="sidebarOption">
          <img src={psychology} alt="" />
          <p>Psychology</p>
        </div>
      </Link>

      <Link to="/cooking">
        <div className="sidebarOption">
          <img src={cooking} alt="" />
          <p>Cooking</p>
        </div>
      </Link>

      <Link to="/music">
        <div className="sidebarOption">
          <img src={music} alt="" />
          <p>Music</p>
        </div>
      </Link>

      <Link to="/science">
        <div className="sidebarOption">
          <img src={science} alt="" />
          <p>Science</p>
        </div>
      </Link>

      <Link to="/health">
        <div className="sidebarOption">
          <img src={health} alt="" />
          <p>Health</p>
        </div>
      </Link>

      <Link to="/movies">
        <div className="sidebarOption">
          <img src={movies} alt="" />
          <p>Movies</p>
        </div>
      </Link>

      <Link to="/technology">
        <div className="sidebarOption">
          <img src={technology} alt="" />
          <p>Technology</p>
        </div>
      </Link>

      <Link to="/education">
        <div className="sidebarOption">
          <img src={education} alt="" />
          <p>Education</p>
        </div>
      </Link>

      <Link to="/discoverspaces">
        <div className="sidebarOption">
          <img src={discovercommunities} alt="" />
          <p className="text">Discover Spaces</p>
        </div>
      </Link>
    </div>
  );
}

export default SidebarOptions;
