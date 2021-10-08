import { debug } from "../mod.ts";
import { timestamp } from "../extras.ts";

// timber also comes with a few extras that are disconnected from the `mod.ts`
// file. let's give them a go

// this will generate a timestamp that we can add with `before`
debug("hello, world!", { before: timestamp() });
