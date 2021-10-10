// you should add a version to this
import { timber } from "../mod.ts";
// you don't need this, but it adds a bit of flavour to this example
import { brightBlue } from "https://deno.land/std@0.110.0/fmt/colors.ts";

// here we're creating an info logger
const info = timber({ name: ["?", brightBlue] });

// this will use the logger and call `console.log` under the hood
info("hello, world!");
