/* eslint-disable require-jsdoc */
import axios from "axios";

const SET_AUTH = "SET_AUTH";
const TOKEN = "token";

const _setAuth = (auth) => ({ type: SET_AUTH, auth });

export const setAuth = async (dispatch) => {
  const token = JSON.parse(window.localStorage.getItem(TOKEN));
  if (token) {
    const result = await axios.get("/auth/me", {
      headers: {
        authorization: token,
      },
    });
    return dispatch(_setAuth(result.data));
  }
};

export const authenticate = (username, password, method) => {
  return async (dispatch) => {
    try {
      const result = await axios.post(`/auth/${method}`, {
        username,
        password,
      });
      window.localStorage.setItem(TOKEN, JSON.stringify(result.data.token));
      dispatch(await setAuth());
    } catch (authError) {
      return dispatch(_setAuth({ error: authError }));
    }
  };
};

export const logout = () => {
  window.localStorage.removeItem(TOKEN);
  return { type: SET_AUTH, auth: {} };
};

function authReducer(state = {}, action) {
  switch (action.type) {
    case SET_AUTH:
      return action.auth;
    default:
      return state;
  }
}

export default authReducer;
