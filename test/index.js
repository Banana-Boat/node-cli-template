import { execSync } from "child_process";
import chalk from "chalk";

function testCmd(cmdName, cmd) {
  console.log(chalk.blue(`Command ${cmdName} start testing`));
  execSync(cmd, { stdio: "inherit" });
}

execSync("npm run build", { stdio: "inherit" });

testCmd("showtime", "node . showtime -n Terry");
testCmd(
  "convert",
  "node . convert -p ./test/unconverted.txt -o ./test/converted.txt"
);
