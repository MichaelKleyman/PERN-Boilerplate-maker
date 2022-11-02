/* eslint-disable require-jsdoc */
import React, { Component } from "react";
import { loginUser } from "../redux/singleUser";
import { addUser } from "../redux/users";
import { connect } from "react-redux";

export class TempLogin extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      age: 0,
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const name = e.target.name;
    this.setState({
      [name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addUser({...this.state});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="inner-form">
          <h2>Login</h2>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="name"
              placeholder="Username"
              onChange={this.handleChange}
              value={this.state.username}
            />
          </div>
          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              type="text"
              name="age"
              id="age"
              placeholder="Age"
              onChange={this.handleChange}
              value={this.state.age}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              name="password"
              id="password"
              placeholder="Password"
              onChange={this.handleChange}
              value={this.state.password}
            />
          </div>
          <button type="submit">Login</button>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (id) => {
      dispatch(loginUser(id));
    },
    addUser: (user) => {
        dispatch(addUser(user));
    }
  };
};

export default connect(null, mapDispatchToProps)(TempLogin);
