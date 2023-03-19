#!/usr/bin/env node
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { showTimeHandler } from "./handlers.js";
yargs(hideBin(process.argv))
    .usage("Usage: $0 <command> [options]")
    .example("$0 showtime -n terry", "greeting with current time")
    .demandCommand(1)
    .command("showtime", "Show current time", (yargs) => yargs.option("n", {
    alias: "name",
    describe: "Your name",
    type: "string",
    demandOption: true,
}), showTimeHandler)
    .parse();
