export enum Severity {
  INFO = "info",
  WARNING = "warning",
  ERROR = "error",
}

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

export interface ErrorI {
  id: string;
  msg: string;
  status: number;
}

export interface ActionI {
  type: string;
  payload: any;
}
