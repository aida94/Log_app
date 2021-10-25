import { LogI } from "../shared/interfaces";
import { mockMessages, mockSeverity } from "../shared/constants";
import { pickRandomElementFromArray } from "./pickRandomElementFromArray";

export const generateRandomLog = (): LogI => {
  return {
    datetime: new Date().getTime(),
    message: pickRandomElementFromArray(mockMessages),
    severity: pickRandomElementFromArray(mockSeverity),
  };
};
