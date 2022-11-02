import React from "react";
import { Link } from "react-router-dom";

const MovieFeed = () => {
  return (
    <div>
      <nav>
        <Link to="/homepage" className="link">
          Home Page
        </Link>
        <Link to="/movie-feed" className="link">
          Movies To Watch
        </Link>
      </nav>
      <p>Movies To Watch!</p>
    </div>
  );
};

export default MovieFeed;
