import React from "react";
import "../StyleDesigns/Movies.css";
import SidebarOptions from "../../SidebarOptions";
import Widget from "../../Widget";
import Feed from "../../Feed";

const Movies = () => {
  return (
    <div className="Movies">
      <div className="MoviesPageContents">
        <div className="MoviesPageContent">
          <SidebarOptions />
          <Widget />
        </div>
      </div>
    </div>
  );
};

export default Movies;
