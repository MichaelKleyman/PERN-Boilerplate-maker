import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const MainPage = (props) => {
  const { username } = props;
  console.log('username', username)
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
      <h1>Welcome {username}</h1>
    </div>
  );
};

const mapState = (state) => {
  return {
    username: state.auth.username,
  };
};

export default connect(mapState)(MainPage);
