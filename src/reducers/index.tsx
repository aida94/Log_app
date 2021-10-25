import { combineReducers } from "redux";

import logReducer from "./logReducer";

const createRootReducer = () =>
  combineReducers({
    logState: logReducer,
  });

export default createRootReducer;
