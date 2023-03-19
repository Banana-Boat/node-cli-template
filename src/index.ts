#!/usr/bin/env node

import yargs, { Argv } from "yargs";
import { hideBin } from "yargs/helpers";
import { showTimeHandler } from "./handlers.js";
import { IShowtimeOption } from "./types.js";

yargs(hideBin(process.argv))
  .usage("Usage: $0 <command> [options]")
  .example("$0 showtime -n terry", "greeting with current time")
  .demandCommand(1)
  .command<IShowtimeOption>(
    "showtime",
    "Show current time",
    (yargs: Argv) =>
      yargs.option("n", {
        alias: "name",
        describe: "Your name",
        type: "string",
        demandOption: true,
      }),
    showTimeHandler
  )
  .parse();
