#!/usr/bin/env node

import yargs, { Argv } from "yargs";
import { hideBin } from "yargs/helpers";
import { showTimeHandler, convertHandler } from "./handlers.js";
import { IConvertOption, IShowtimeOption } from "./types.js";

yargs(hideBin(process.argv))
  .usage("Usage: $0 <command> [options]")
  .example("$0 showtime -n terry", "Greet with current time")
  .example(
    "$0 convert -p ./file.txt",
    "Convert all the letter of file into lowercase"
  )
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
  .command<IConvertOption>(
    "convert",
    "Convert all the letter of file into lowercase",
    (yargs: Argv) =>
      yargs
        .option("p", {
          alias: "path",
          describe: "input file path",
          type: "string",
          demandOption: true,
        })
        .option("o", {
          alias: "output",
          describe: "output file path",
          type: "string",
          demandOption: false,
        }),
    convertHandler
  )
  .parse();
