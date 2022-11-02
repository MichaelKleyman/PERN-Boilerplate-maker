import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getUser } from "../redux/singleUser";
import { connect } from "react-redux";

const MainPage = (props) => {
  const { singleUser } = props;
//   const [user, setUser] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    const userId = singleUser.id || 0;
    dispatch(getUser(userId));
  }, []);

  const user = singleUser.name || '';
  console.log('>>>>', user)
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
      <h1>Welcome {user}</h1>
    </div>
  );
};

const mapState = (state) => {
  return {
    singleUser: state.user,
  };
};

export default connect(mapState)(MainPage);
