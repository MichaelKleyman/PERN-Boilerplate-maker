/* eslint-disable require-jsdoc */
import axios from 'axios';
// ACTION TYPE
const LOGIN_USER = 'LOGIN_USER';

// ACTION CREATOR
const loginUser = (user) => ({type: LOGIN_USER, user});

// THUNK CREATOR
export const getUser = (id) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get(`/api/users/${id}`);
      dispatch(loginUser(data));
    } catch (e) {
      console.error(e);
    }
  };
};

// REDUCER
const initialState = {};
function singleUser(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return action.user;
    default:
      return state;
  }
}

export default singleUser;
