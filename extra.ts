import { timber, TimberInit } from "./mod.ts";
import {
  brightBlue,
  brightMagenta,
  gray,
  green,
  red,
  yellow,
} from "https://deno.land/std@0.111.0/fmt/colors.ts";

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
export const debug = (logger: Partial<TimberInit<void>> = {}) =>
  timber({
    name: { text: () => "@", style: brightMagenta },
    before: { text: () => `[${timestamp()}]`, style: gray },
    log: console.debug,
    ...logger,
  });
/** The info logger. */
export const info = (logger: Partial<TimberInit<void>> = {}) =>
  timber({
    name: { text: () => "?", style: brightBlue },
    before: { text: () => `[${timestamp()}]`, style: gray },
    log: console.info,
    ...logger,
  });
/** The warn logger. */
export const warn = (logger: Partial<TimberInit<void>> = {}) =>
  timber({
    name: { text: () => "~", style: yellow },
    before: { text: () => `[${timestamp()}]`, style: gray },
    log: console.warn,
    ...logger,
  });
/** The error logger. */
export const error = (logger: Partial<TimberInit<void>> = {}) =>
  timber({
    name: { text: () => "!", style: red },
    before: { text: () => `[${timestamp()}]`, style: gray },
    log: console.error,
    ...logger,
  });
/** The success logger. */
export const success = (logger: Partial<TimberInit<void>> = {}) =>
  timber({
    name: { text: () => "+", style: green },
    before: { text: () => `[${timestamp()}]`, style: gray },
    log: console.log,
    ...logger,
  });
