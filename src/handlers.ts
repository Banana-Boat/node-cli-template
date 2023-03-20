import chalk from "chalk";
import fs from "fs";
import path from "path";
import { Transform } from "stream";
import { IConvertOption, IShowtimeOption } from "./types.js";

export const showTimeHandler = (argv: IShowtimeOption) => {
  console.log(
    chalk.underline.italic.greenBright(
      `Hello ${argv.name}, it is ${new Date().toLocaleTimeString()} now!`
    )
  );
};

export const convertHandler = (argv: IConvertOption) => {
  if (!fs.existsSync(argv.path))
    return console.log(chalk.red(`The file path ${argv.path} doesn't exist`));

  const convertStream = new Transform({
    transform(chunk, encoding, callback) {
      this.push(chunk.toString().toLowerCase());
      callback();
    },
  });

  const filename = path.basename(argv.path).split(".")[0];
  const extname = path.extname(argv.path);

  const outputPath = argv.output
    ? argv.output
    : `./${filename}_modified${extname}`;

  const writeStream = fs.createWriteStream(outputPath);

  console.log(chalk.blue("Start Converting..."));
  fs.createReadStream(argv.path)
    .pipe(convertStream)
    .pipe(writeStream)
    .on("finish", () => console.log(chalk.green("Converting finished.")));
};
