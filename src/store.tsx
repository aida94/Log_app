import { createStore, applyMiddleware, compose } from "redux";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";

import createRootReducer from "./reducers";

const initialState = {};
const middleware = [thunk];

export const history = createBrowserHistory();

export const store = createStore(
  createRootReducer(),
  initialState,
  compose(applyMiddleware(...middleware, routerMiddleware(history)))
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
