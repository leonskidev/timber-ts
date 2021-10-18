import { empty, squareBrackets, style } from "./_util.ts";

/** Options used to construct a logger. */
export type Options<T> = {
  /**
   * The name of the logger.
   *
   * This is shown between `[]` after `before` and before `after`.
   */
  name: { text: () => string; style?: (str: string) => string };

  /** To be shown before `name`. */
  before?: { text: () => string; style?: (str: string) => string };
  /** To be shown after `name`. */
  after?: { text: () => string; style?: (str: string) => string };

  /** The function used to log the data. */
  log: (...data: unknown[]) => T;
};

/** Takes in `Options` and fills in the missing details. */
export function Options<T>(opts: Options<T>): Required<Options<T>> {
  return {
    name: opts.name,

    before: opts.before ?? { text: empty },
    after: opts.after ?? { text: empty },

    log: opts.log,
  };
}

/** Creates a new logger. */
export function timber<T>(opts: Options<T>): ((...data: unknown[]) => T) {
  const o = Options(opts);
  o.name.text = squareBrackets(o.name.text);
  return (...data: unknown[]): T =>
    o.log(
      `${style(o.before)} ${style(o.name)} ${style(o.after)}`
        .trim(),
      ...data,
    );
}
