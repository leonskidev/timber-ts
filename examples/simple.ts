import { debug, error, info, warn } from "../mod.ts";
import { gray } from "../deps.ts";

// here we use the included `debug` logger that come with timber. there are
// four included loggers: `debug`, `info`, `warn`; and `error`
debug("hello, world!");

// we can set a custom log function for the output
info("hello, world!", { logger: console.info });

// you can display extra information before and after the log level (you don't
// have to add colour, but it's a nice touch)
warn("hello, world!", { before: gray("BEFORE"), after: gray("AFTER") });

// and you can also tell it to use the long name of the log level instead of
// the symbol if needed
error("hello, world!", { long: true });
