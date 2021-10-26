import { LogI } from "../shared/interfaces";
import { mockMessages, mockSeverity, Severity } from "../shared/constants";
import { pickRandomElementFromArray } from "./pickRandomElementFromArray";

export const generateRandomLog = (): LogI[] => {
  const randomNumber = Math.floor(Math.random() * 5);
  const logs = [];
  for (let i = 0; i <= randomNumber; i++) {
    const severity = pickRandomElementFromArray(mockSeverity);
    const message = pickRandomElementFromArray(
      mockMessages[severity as Severity]
    );
    logs.push({
      datetime: new Date().getTime(),
      message,
      severity,
    });
  }
  return logs;
};
