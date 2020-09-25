import clear from "clear";

import message from "./lib/message";
import questions from "./lib/questions";
import parseArgumentsIntoOptions from "./lib/options";
import helpCommands from "./lib/help_commands"

export async function cli(args) {
  let options = parseArgumentsIntoOptions(args);

  clear();

  if (options.help) {
    helpCommands();
    process.exit();
  }

  message();
  questions();
}
