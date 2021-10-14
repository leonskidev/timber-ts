_A **simple**, **tiny** logger for **[deno]** that **just works**._

## Usage

There are two ways to use **timber**, either from scratch with just [`mod.ts`]
or using some defaults provided by [`extra.ts`]. Most projects will only need
what you can find in [`extra.ts`]; you can always create new loggers as and when
needed.

### [`mod.ts`]

```ts
// you'll want to add a version too this
import { timber } from "https://deno.land/x/timber@vX.Y.Z/mod.ts";
// we'll also use some colour to spice things up
import { brightBlue } from "https://deno.land/std@0.111.0/fmt/colors.ts";

// here we make a simple info logger
const info = timber({
  name: { text: () => "?", style: brightBlue },
  log: console.info,
});

// and now we can use it whenever we would like
info("hello, world!");
```

**Note**: _`name`, `before`, and `after`'s `text` field is a function so that it
can be updated over time. This is useful for timestamps and other such stuff_.

### [`extra.ts`]

```ts
// you'll want to add a version too this
import { info as tInfo } from "https://deno.land/x/timber@vX.Y.Z/extra.ts";

// the extras come with some settings that might not be to everyone's liking,
// so you get to finish the config before you can use it
const info = tInfo({ before: undefined });

// and now we can use it whenever we would like
info("hello, world!");
```

## Licence

This is licenced under **MIT**; you can find out more in the provided
[`LICENCE`] file.

[deno]: https://github.com/denoland/deno
[`mod.ts`]: ./mod.ts
[`extra.ts`]: ./extra.ts
[`LICENCE`]: ./LICENCE
