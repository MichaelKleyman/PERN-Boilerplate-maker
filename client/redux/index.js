import { combineReducers } from "redux";
import singleUser from "./singleUser";
import usersReducer from "./users";
import authReducer from "./auth";

const appReducer = combineReducers({
  user: singleUser,
  users: usersReducer,
  auth: authReducer,
});

export default appReducer;
