export interface LogI {
  id: number;
  datetime: number;
  severity: "info" | "warning" | "error";
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
