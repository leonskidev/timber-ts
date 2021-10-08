import { timber } from "../mod.ts";
import { brightMagenta } from "../deps.ts";

// in this example we're going to create our own logger called `trace` and give
// it a go
const trace = timber({
  // this is the long name for the log level
  long: "trace",
  // if we don't give it a symbol it'll be set to `" "` automatically, which is
  // not the most descriptive
  short: ".",
  // if we don't give it a colour function then it'll remain whatever your text
  // colour may be, but we'll make it bright-magenta like the `debug` logger
  color: brightMagenta,
});

// without comments that would all fit on one line
// const trace = timber({ long: "trace", short: ".", color: brightMagenta });

// now let's give it a go
trace("hello, world!");
