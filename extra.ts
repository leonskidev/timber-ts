import { timber, Logger } from "./mod.ts";
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
export const debug = (logger: Partial<Logger> = {}) => timber({
  ...logger,
  name: ["@", brightMagenta],
  before: () => gray(`[${timestamp()}]`),
  log: console.debug,
});
/** The info logger. */
export const info = (logger: Partial<Logger> = {}) => timber({
  ...logger,
  name: ["?", brightBlue],
  before: () => gray(`[${timestamp()}]`),
  log: console.info,
});
/** The warn logger. */
export const warn = (logger: Partial<Logger> = {}) => timber({
  ...logger,
  name: ["~", yellow],
  before: () => gray(`[${timestamp()}]`),
  log: console.warn,
});
/** The error logger. */
export const error = (logger: Partial<Logger> = {}) => timber({
  ...logger,
  name: ["!", red],
  before: () => gray(`[${timestamp()}]`),
  log: console.error,
});
/** The success logger. */
export const success = (logger: Partial<Logger> = {}) => timber({
  ...logger,
  name: ["+", green],
  before: () => gray(`[${timestamp()}]`),
  log: console.log,
});
