export type Logger = {
  /**
   * The name for this logger.
   *
   * Values for this may look like: `debug` / `@` or `error` / `!`.
   */
  name: string | [string, (str: string) => string];

  /** Shown before the logger's `name` or `symbol`. */
  before?: () => string | [string, (str: string) => string];
  /** Shown after the logger's `name` or `symbol`. */
  after?: () => string | [string, (str: string) => string];

  /** The function called to log data. */
  log?: (...data: unknown[]) => unknown;
};

const style = (str: string | [string, (str: string) => string]): string => {
  if (Array.isArray(str)) return str[1](str[0]);
  return str;
};

/** Creates a new logger. */
export const timber = (logger: Logger): ((...data: unknown[]) => unknown) => {
  const name = Array.isArray(logger.name)
    ? logger.name[1](`[${logger.name[0]}]`)
    : logger.name;
  const before = logger.before ?? (() => "");
  const after = logger.after ?? (() => "");
  const log = logger.log ?? console.log;

  return (...data: unknown[]): unknown => {
    return log(
      `${style(before())} ${name} ${style(after())}`.trim(),
      ...data,
    );
  };
};
