import { GET_LOGS, LOGS_LOADING } from "./../actions/types";
import { ActionI, LogI } from "./../shared/interfaces";

const initialState = {
  logs: [],
  loading: false,
  logTypeAmount: {
    info: 0,
    warning: 0,
    error: 0,
  },
};

const logReducer = (state = initialState, action: ActionI) => {
  switch (action.type) {
    case GET_LOGS:
      return {
        ...state,
        logs: action.payload,
        loading: false,
        logTypeAmount: {
          info: action.payload.filter((el: LogI) => el.severity === "info")
            .length,
          warning: action.payload.filter(
            (el: LogI) => el.severity === "warning"
          ).length,
          error: action.payload.filter((el: LogI) => el.severity === "error")
            .length,
        },
      };

    case LOGS_LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};

export default logReducer;
