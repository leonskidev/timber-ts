_A **simple**, **tiny** logger for **[deno]** that **just works**._

## Usage

One of the ways to use **timber** is with **just the core** by itself:

`./examples/core.ts`

```ts
// you should add a version to this
import { timber } from "https://deno.land/x/timber/mod.ts";
// you don't need this, but it adds a bit of flavour to this example
import { brightBlue } from "https://deno.land/std@0.110.0/fmt/colors.ts";

// here we're creating a logger called "info"
const info = timber({ long: "info", short: "?", style: brightBlue });

// this will use the logger and call `console.log` under the hood
info("hello, world!");
```

Or you can use **the extras** which comes with pre-defined loggers and helper
functions:

`./examples/extra.ts`

```ts
// you should add a version to this
import { info, timestamp } from "https://deno.land/x/timber/extra.ts";

// this time we can use the pre-made logger with the timestamp helper
info("hello, world!", { before: timestamp() });
```

## Licence

This project is licence under the **MIT Licence**. You can find out more in the
provided `LICENCE` file.

[deno]: https://github.com/denoland/deno
