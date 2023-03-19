import chalk from "chalk";
export const showTimeHandler = (argv) => {
    console.log(argv);
    console.log(chalk.underline.italic.greenBright(`Hello ${argv.name}, it is ${new Date().toLocaleTimeString()} now!`));
};
