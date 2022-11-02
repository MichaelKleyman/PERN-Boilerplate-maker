/* eslint-disable require-jsdoc */
import axios from "axios";

// ACTION TYPE
const ADD_USER = "ADD_USER";

// ACTION CREATOR
const _addUser = (user) => ({ type: ADD_USER, user });

// THUNK CREATOR
export const addUser = (user) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post("/api/users/auth/signup", user);
      dispatch(_addUser(data));
    } catch (e) {
      console.error(e);
    }
  };
};

// REDUCER
function usersReducer(state = [], action) {
  switch (action.type) {
    case ADD_USER:
      return [...state, action.user];
    default:
      return state;
  }
}

export default usersReducer;
