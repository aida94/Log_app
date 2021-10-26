export enum Severity {
  INFO = "info",
  WARNING = "warning",
  ERROR = "error",
}

export const mockSeverity: Severity[] = [
  Severity.INFO,
  Severity.WARNING,
  Severity.ERROR,
];

export const mockMessages: Record<Severity, string[]> = {
  [Severity.INFO]: ["Something truly awesome happened."],
  [Severity.WARNING]: [
    "Static file was not found",
    "Record not found",
    "Server Error",
  ],
  [Severity.ERROR]: ["Record not found", "Server Error"],
};
