import { GET_LOGS, LOGS_LOADING } from "../shared/reduxTypes";
import { ActionI, LogI, LogTypeI } from "./../shared/interfaces";
import { Severity } from "./../shared/constants";

const initialState: {
  logs: LogI[];
  loading: boolean;
  logTypeAmount: LogTypeI;
} = {
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
      const amount = (action.payload as LogI[]).reduce<
        Record<Severity, number>
      >(
        (acc, log) => {
          acc[log.severity] = (acc[log.severity] || 0) + 1;
          return acc;
        },
        { [Severity.INFO]: 0, [Severity.WARNING]: 0, [Severity.ERROR]: 0 }
      );

      return {
        ...state,
        logs: [...state.logs, ...action.payload],
        loading: false,
        logTypeAmount: {
          info: state.logTypeAmount.info + amount.info,
          warning: state.logTypeAmount.warning + amount.warning,
          error: state.logTypeAmount.error + amount.error,
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
