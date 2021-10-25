import { Severity } from "./constants";

export interface LogI {
  datetime: number;
  severity: Severity.INFO | Severity.WARNING | Severity.ERROR;
  message: string;
}

export interface LogTypeI {
  info: number;
  warning: number;
  error: number;
}

export interface ActionI {
  type: string;
  payload: any;
}
