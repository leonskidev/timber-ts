type Level = {
  /** The long name for the log level. */
  long: string;
  /** A single character to represent the log level. */
  short?: string;
  /** Used to style the log level. */
  style?: (str: string) => string;
};

// coerces a `Level` into a `Required<Level>`
const Level = (level: Level): Required<Level> => {
  return {
    long: level.long,
    short: level.short?.charAt(0) ?? " ",
    style: level.style ?? ((s: string) => s),
  };
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

// coerces a `Level` into a `Required<Level>`
const Options = (options: Options): Required<Options> => {
  return {
    long: options.long ?? false,
    before: options.before ?? "",
    after: options.after ?? "",
    logger: options.logger ?? console.log,
  };
};

/** Creates a new logger. */
export const timber = (
  level: Level,
): ((data: unknown, opts?: Options) => unknown) => {
  const LEVEL = Level(level);

  return (data: unknown, opts: Options = {}): unknown => {
    const OPTS = Options(opts);

    return OPTS.logger(
      (
        `${OPTS.before} ` +
        `${LEVEL.style(`[${OPTS.long ? LEVEL.long : LEVEL.short}]`)} ` +
        `${OPTS.after}`
      ).trim(),
      data,
    );
  };
};
