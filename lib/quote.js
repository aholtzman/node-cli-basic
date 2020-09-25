import axios from "axios";
import chalk from "chalk";

export default function geekJoke() {
  axios.get(`https://ron-swanson-quotes.herokuapp.com/v2/quotes`)
    .then(response => {
      console.log(`\n${chalk.green.bold(response.data)}\n`);
    })
    .catch(error => {
      console.log(error);
    })
}
