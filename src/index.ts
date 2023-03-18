#! /usr/bin/env node

import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import chalk from "chalk";

const options = yargs(hideBin(process.argv))
  .usage("Usage: -n <name>")
  .option("n", {
    alias: "name",
    describe: "Your name",
    type: "string",
    demandOption: true,
  })
  .parse();

chalk.green("hello world");

console.log(options);
