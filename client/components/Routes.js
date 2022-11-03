/* eslint-disable require-jsdoc */
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { connect } from "react-redux";
import { TheSignUp, Login } from "./Singup";
import MainPage from "./MainPage";
import MovieFeed from "./MovieFeed";
import { setAuth } from "../redux/auth";
import NavBar from "./NavBar";

const MyRoutes = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    return async() => {
      dispatch(await setAuth());
    };
  }, []);

  const { isLoggedIn } = props;
  return (
    <Router>
      <div>
        <NavBar />
        {isLoggedIn ? (
          <Routes>
            <Route exact path="/homepage" element={<MainPage />} />
          </Routes>
        ) : (
          <Routes>
            <Route path='/' exact component={ <Login /> } />
            <Route exact path="/homepage" element={<MainPage />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<TheSignUp />} />
            <Route exact path="/movie-feed" element={<MovieFeed />} />
          </Routes>
        )}
        {/* <Routes>
          <Route exact path="/signup" element={<TheSignUp />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/homepage" element={<MainPage />} />
          <Route exact path="/movie-feed" element={<MovieFeed />} />
        </Routes> */}
      </div>
    </Router>
  );
};

const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
  };
};

export default connect(mapState)(MyRoutes);
