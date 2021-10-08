import { timber } from "./mod.ts";
import {
  brightBlue,
  brightMagenta,
  red,
  yellow,
  gray,
} from "https://deno.land/std@0.110.0/fmt/colors.ts";

export { timber };

/** A debug log. */
export const debug = timber({
  long: "debug",
  short: "@",
  style: brightMagenta,
});
/** An info log. */
export const info = timber({ long: "info", short: "?", style: brightBlue });
/** A warning log. */
export const warn = timber({ long: "warn", short: "~", style: yellow });
/** An error log. */
export const error = timber({ long: "error", short: "!", style: red });

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

  return gray(
    `[${YEAR}-${MONTH + 1}-${DAY} ${HOUR}:${MINUTE}:${SECOND}.${MILLISECOND}]`,
  );
};

/** Creates a simple tag. */
export const tag = (tag: string): string => {
  return gray(`[${tag.slice(0, 5)}]`);
};
