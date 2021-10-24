import { GET_ERRORS } from "../actions/types";
import { ActionI, ErrorI } from "./../shared/interfaces";

const initialState: ErrorI | null = null;

const errorReducer = (state = initialState, action: ActionI) => {
  switch (action.type) {
    case GET_ERRORS:
      return {
        msg: action.payload.msg,
        status: action.payload.status,
        id: action.payload.id,
      };
    default:
      return state;
  }
};

export default errorReducer;
