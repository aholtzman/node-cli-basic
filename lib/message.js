import figlet from "figlet";
import chalk from "chalk";

export default function message() {
  const now = new Date().getHours();
  const timeOfDay = now < 12 ? "Morning" : (now > 16 ? "Evening" : "Afternoon")
  console.log(
    chalk.blueBright.bold(figlet.textSync(`Good ${ timeOfDay }!`, { horizontalLayout: "default" }))
  );
}
