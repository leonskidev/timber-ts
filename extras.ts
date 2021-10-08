import { gray } from "./deps.ts";

/** Creates a simple timestamp. */
export const timestamp = (date?: Date, utc?: boolean): string => {
  const DATE = date ?? new Date();

  const YEAR = utc ? DATE.getUTCFullYear() : DATE.getFullYear();
  const MONTH = utc ? DATE.getUTCMonth() : DATE.getMonth();
  const DAY = utc ? DATE.getUTCDate() : DATE.getDate();

  const HOUR = utc ? DATE.getUTCHours() : DATE.getHours();
  const MINUTE = utc ? DATE.getUTCMinutes() : DATE.getMinutes();
  const SECOND = utc ? DATE.getUTCSeconds() : DATE.getSeconds();
  const MILLISECOND = utc ? DATE.getUTCMilliseconds() : DATE.getMilliseconds();

  return gray(`[${YEAR}-${MONTH + 1}-${DAY} ${HOUR}:${MINUTE}:${SECOND}.${MILLISECOND}]`);
}
