import { GET_LOGS, LOGS_LOADING } from "./types";
import { LogI, Severity } from "./../shared/interfaces";

// Get Logs
export const getLogs = () => async (dispatch: any) => {
  // Logs loading
  dispatch({ type: LOGS_LOADING });

  setInterval(() => {
    dispatch({ type: GET_LOGS, payload: [generateRandomLog()] });
  }, 1000);

  // dispatch(
  //   returnErrors(err.response.data, err.response.status, "GET_LOGS_FAIL")
  // );
};

const mockSeverity: Severity[] = [
  Severity.INFO,
  Severity.WARNING,
  Severity.ERROR,
];
const mockMessages: string[] = ["message 1", "message 2", "message 3"];

export const pickRandomElementFromArray = (array: any[]): any => {
  return array[Math.floor(Math.random() * array.length)];
};

export const generateRandomLog = (): LogI => {
  return {
    datetime: new Date().getTime(),
    message: pickRandomElementFromArray(mockMessages),
    severity: pickRandomElementFromArray(mockSeverity),
  };
};
