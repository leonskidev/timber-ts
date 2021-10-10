import { timber } from "./mod.ts";
import {
  brightBlue,
  brightMagenta,
  gray,
  green,
  red,
  yellow,
} from "https://deno.land/std@0.110.0/fmt/colors.ts";

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

  // deno-fmt-ignore
  return `${YEAR}-${MONTH + 1}-${DAY} ${HOUR}:${MINUTE}:${SECOND}.${MILLISECOND}`;
};

/** Creates a simple tag. */
export const tag = (tag: string): string => {
  return gray(`[${tag.slice(0, 5)}]`);
};

/** The debug logger. */
export const debug = timber({
  name: ["@", brightMagenta],
  before: [`[${timestamp()}]`, gray],
});
/** The info logger. */
export const info = timber({
  name: ["?", brightBlue],
  before: [`[${timestamp()}]`, gray],
});
/** The warn logger. */
export const warn = timber({
  name: ["~", yellow],
  before: [`[${timestamp()}]`, gray],
});
/** The error logger. */
export const error = timber({
  name: ["!", red],
  before: [`[${timestamp()}]`, gray],
});
/** The success logger. */
export const success = timber({
  name: ["+", green],
  before: [`[${timestamp()}]`, gray],
});
