import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { TheSignUp, Login } from "./Singup";
import MainPage from "./MainPage";
import MovieFeed from "./MovieFeed";

const MyRoutes = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/signup" element={<TheSignUp />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/homepage" element={<MainPage />} />
          <Route exact path="/movie-feed" element={<MovieFeed />} />
        </Routes>
      </div>
    </Router>
  );
};

export default MyRoutes;
