import { GET_ERRORS } from "./types";

// Return Errors
export const returnErrors = (msg: string, status: number, id: string) => {
  return {
    type: GET_ERRORS,
    payload: { msg, status, id },
  };
};
