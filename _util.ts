export function empty(): string {
  return "";
}

export function style(
  stylable: { text: () => string; style?: (str: string) => string },
): string {
  return stylable.style?.(stylable.text()) ?? stylable.text();
}

export function squareBrackets(text: () => string): (() => string) {
  return (): string => `[${text()}]`;
}
