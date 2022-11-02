/* eslint-disable indent */
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import storage from "redux-persist/lib/storage";
import appReducer from "./redux";
import thunkMiddleware from "redux-thunk";
import loggingMiddleware from "redux-logger";
import { createLogger } from "redux-logger";

const store = createStore(
  appReducer,
  applyMiddleware(thunkMiddleware, createLogger(), loggingMiddleware)
);

export default store;
