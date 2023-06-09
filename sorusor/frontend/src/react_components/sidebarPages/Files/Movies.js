import React from "react";
import "../StyleDesigns/Movies.css";
import SidebarOptions from "../../SidebarOptions";
import Widget from "../../Widget";
import placeholderImage from "../../../SoruSorDesign/Sidebar/movie.png";

import Feed from "../../Feed";

const Movies = () => {
  return (
    <div className="Movies">
      <div className="MoviesPageContents">
        <div className="MoviesPageContent">
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

export default Movies;
