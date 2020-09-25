import arg from "arg";

export default function parseArgumentsIntoOptions(rawArgs) {
  const args = arg(
    {
      "--help": Boolean,
      "-h": "--help"
    },
    {
      argv: rawArgs.slice(2)
    }
  );

  return {
    help: args["--help"] || false
  };
}
