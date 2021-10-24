import { combineReducers } from "redux";

import logReducer from "./logReducer";
import errorReducer from "./errorReducer";

const createRootReducer = () =>
  combineReducers({
    logState: logReducer,
    error: errorReducer,
  });

export default createRootReducer;
