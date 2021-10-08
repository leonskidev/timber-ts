import { brightBlue, brightMagenta, red, yellow } from "./deps.ts";

type Level = {
  /**
   * The long name for the log level.
   *
   * Built-in levels include: `debug`, `info`, `warn`; and `error`.
   */
  long: string;
  /**
   * A **single** character to represent the log level.
   *
   * Built-in levels include: `@` (`debug`), `?` (`info`), `~` (`warn`); and `!` (`error`).
   */
  short?: string;
  /**
   * Used to color the log level.
   *
   * This respects `NO_COLOR` if it is used.
   */
  color?: (str: string) => string;
};

type Options = {
  /** Whether to use the long name instead of the short name. */
  long?: boolean;

  /** A string placed before the log level. */
  before?: string;
  /** A string placed after the log level. */
  after?: string;

  /** The function used to log the message. */
  logger?: (...data: unknown[]) => unknown;
};

/** Creates a new logger. */
export const timber = (
  level: Level,
): ((message: string, opts?: Options) => unknown) => {
  const LEVEL: Required<Level> = {
    long: level.long,
    short: level.short?.charAt(0) ?? " ",
    color: level.color ?? ((str: string): string => str),
  };

  return (message: unknown, opts: Options = {}): unknown => {
    const OPTS: Required<Options> = {
      long: opts.long ?? false,

      before: opts.before ?? "",
      after: opts.after ?? "",

      logger: opts.logger ?? console.log,
    };

    return OPTS.logger(
      `${OPTS.before ? OPTS.before + " " : ""}` +
        `${LEVEL.color(`[${OPTS.long ? LEVEL.long : LEVEL.short}]`)}` +
        `${OPTS.after ? " " + OPTS.after : ""}`,
      message,
    );
  };
};

/** A debug log. */
export const debug = timber({
  long: "debug",
  short: "@",
  color: brightMagenta,
});
/** An info log. */
export const info = timber({ long: "info", short: "?", color: brightBlue });
/** A warning log. */
export const warn = timber({ long: "warn", short: "~", color: yellow });
/** An error log. */
export const error = timber({ long: "error", short: "!", color: red });
