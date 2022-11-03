/* eslint-disable new-cap */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { authenticate } from "../redux/auth";

const Signup = (props) => {
  const { name, displayName, error } = props;
  const [user, setUser] = useState({ username: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [error, serError] = useState("");

  const Signup = (details) => {
    const formName = displayName.slice(0,1).toLowerCase() + displayName.slice(1);
    dispatch(authenticate(details.username, details.password, formName));
    navigate('/homepage');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    const formName = e.target.name;
    Signup({username, password, formName});
  };

  const handleChange = (e) => {
    const name = e.target.name;
    setUser({ ...user, [name]: e.target.value });
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit} name={name}>
        <div className="inner-form">
          <h2>{displayName}</h2>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="name"
              placeholder="Username"
              onChange={handleChange}
              value={user.username}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              name="password"
              id="password"
              placeholder="Password"
              onChange={handleChange}
              value={user.password}
            />
          </div>
          <button type="submit">{displayName}</button>
          {error && error.response && <div> {error.response.data} </div>}
        </div>
      </form>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     user: state.singleUser,
//   };
// };

const mapLogin = (state) => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.auth.error,
  }
}

const mapSignup = (state) => {
  return {
    name: "signup",
    displayName: "Signup",
    error: state.auth.error,
  };
};

export const Login = connect(mapLogin)(Signup);
export const TheSignUp = connect(mapSignup)(Signup);
