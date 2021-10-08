// you should add a version to this
import { info, timestamp } from "../extra.ts";

// this time we can use the pre-made logger with the timestamp helper
info("hello, world!", { before: timestamp() });
