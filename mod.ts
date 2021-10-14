export type TimberInit<T> = {
  name: { text: () => string; style?: (str: string) => string };

  before?: { text: () => string; style?: (str: string) => string };
  after?: { text: () => string; style?: (str: string) => string };

  log: (...data: unknown[]) => T;
};

export const timber = <T>(
  init: TimberInit<T>,
): ((...data: unknown[]) => T) => {
  const name = init.name;
  const before = init.before ?? { text: () => "" };
  const after = init.after ?? { text: () => "" };
  const log = init.log;

  return (...data: unknown[]): T =>
    log(
      (
        before.style?.(before.text()) ?? before.text() + " " +
        name.style?.(name.text()) ?? name.text() + " " +
        after.style?.(after.text()) ?? after.text()
      ).trim(),
      ...data,
    );
};
