import { DateTime } from "luxon";
export const convertToRedableDate = (date: string) => {
  return DateTime.fromISO(date).toLocaleString(DateTime.DATE_HUGE);
};

export const convertToRedableDuration = (
  startTime: string,
  endTime: string
) => {
  return DateTime.fromISO(endTime)
    .diff(DateTime.fromISO(startTime))
    .toFormat("hh:mm:ss");
};
