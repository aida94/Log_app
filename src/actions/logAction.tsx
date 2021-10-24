import { GET_LOGS, LOGS_LOADING } from "./types";
import { LogI } from "./../shared/interfaces";
import mockedLogList from "./../mock/logList.json";
import { returnErrors } from "./errorAction";

// Get Logs
export const getLogs = () => async (dispatch: any) => {
  // Logs loading
  dispatch({ type: LOGS_LOADING });

  try {
    const res = new Promise<LogI[]>((resolve) => {
      setTimeout(() => {
        resolve(mockedLogList as LogI[]);
      }, 1000);
    });

    console.log(res);

    dispatch({ type: GET_LOGS, payload: mockedLogList });
  } catch (err: any) {
    dispatch(
      returnErrors(err.response.data, err.response.status, "GET_LOGS_FAIL")
    );
  }
};
