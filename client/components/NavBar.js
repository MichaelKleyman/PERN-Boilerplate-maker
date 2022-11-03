/* eslint-disable require-jsdoc */
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/auth";
import { useDispatch } from "react-redux";

const NavBar = ({ isLoggedIn }) => {
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(logout());
  }

  return (
    <div>
      <nav>
        {isLoggedIn ? (
          <div>
            <Link to="/homepage">Home</Link>
            <a onClick={handleClick}>Logout</a>
          </div>
        ) : (
          <div>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
        )}
      </nav>
      <hr />
    </div>
  );
};

const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
  };
};

export default connect(mapState)(NavBar);
