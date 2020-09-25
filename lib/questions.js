import inquirer from "inquirer";
import quote from "./quote"

export default async function questions() {
  questions = [
    {
      type: "confirm",
      name: "joke",
      message: "Need inspiration from Ron Swanson?",
      default: true
    }
  ]

  const answers = await inquirer.prompt(questions);

  answers.joke ? quote() : process.exit();
}
