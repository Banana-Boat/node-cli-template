import chalk from "chalk";
import { IShowtimeOption } from "./types.js";

export const showTimeHandler = (argv: IShowtimeOption) => {
  console.log(
    chalk.underline.italic.greenBright(
      `Hello ${argv.name}, it is ${new Date().toLocaleTimeString()} now!`
    )
  );
};
