import { assertEquals } from "https://deno.land/std@0.111.0/testing/asserts.ts";

import { Options, timber } from "./mod.ts";
import { empty, squareBrackets, style } from "./_util.ts";

const questionMark = (): string => "?";
const addSquareBrackets = (str: string): string => `[${str}]`;
const returnLog = (...data: unknown[]): unknown[] => data;
const before = (): string => "before";
const after = (): string => "after";

const data = ["hello", 1, true, 1n, { hello: "world" }, ["hello"]];

Deno.test(
  "testing_builtins",
  async (t) => {
    await t.step("question_mark", () => assertEquals(questionMark(), "?"));

    await t.step(
      "add_quare_brackets",
      () => assertEquals(addSquareBrackets("a"), "[a]"),
    );

    await t.step(
      "return_log",
      () => assertEquals(returnLog(...data), data),
    );

    await t.step(
      "before",
      () => assertEquals(before(), "before"),
    );

    await t.step(
      "after",
      () => assertEquals(after(), "after"),
    );
  },
);

Deno.test(
  "util",
  async (t) => {
    await t.step(
      "empty",
      () =>
        assertEquals(
          empty(),
          "",
        ),
    );

    await t.step(
      "style",
      () =>
        assertEquals(
          style({ text: questionMark, style: addSquareBrackets }),
          "[?]",
        ),
    );

    await t.step(
      "square_brackets",
      () =>
        assertEquals(
          squareBrackets(questionMark)(),
          "[?]",
        ),
    );
  },
);

Deno.test(
  "mod",
  async (t) => {
    await t.step(
      "create_options_simple",
      () =>
        assertEquals(
          Options({
            name: { text: questionMark },
            log: console.info,
          }),
          {
            name: { text: questionMark },

            before: { text: empty },
            after: { text: empty },

            log: console.info,
          },
        ),
    );

    await t.step(
      "create_options_full",
      () =>
        assertEquals(
          Options({
            name: { text: questionMark },

            before: { text: before },
            after: { text: after },

            log: console.info,
          }),
          {
            name: { text: questionMark },

            before: { text: before },
            after: { text: after },

            log: console.info,
          },
        ),
    );

    await t.step(
      "create_options_styles",
      () =>
        assertEquals(
          Options({
            name: { text: questionMark, style: addSquareBrackets },

            before: { text: before, style: addSquareBrackets },
            after: { text: after, style: addSquareBrackets },

            log: console.info,
          }),
          {
            name: { text: questionMark, style: addSquareBrackets },

            before: { text: before, style: addSquareBrackets },
            after: { text: after, style: addSquareBrackets },

            log: console.info,
          },
        ),
    );

    await t.step(
      "create_logger_simple",
      () =>
        assertEquals(
          timber({
            name: { text: questionMark },
            log: returnLog,
          })(...data),
          [`[?]`, ...data],
        ),
    );

    await t.step(
      "create_logger_full",
      () =>
        assertEquals(
          timber({
            name: { text: questionMark },

            before: { text: before },
            after: { text: after },

            log: returnLog,
          })(...data),
          [`before [?] after`, ...data],
        ),
    );

    await t.step(
      "create_logger_styles",
      () =>
        assertEquals(
          timber({
            name: { text: questionMark, style: addSquareBrackets },

            before: { text: before, style: addSquareBrackets },
            after: { text: after, style: addSquareBrackets },

            log: returnLog,
          })(...data),
          [`[before] [[?]] [after]`, ...data],
        ),
    );
  },
);
