const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(`Input : `, (answer) => {
  console.log(findFirstNonRepeat(answer));
});

const findFirstNonRepeat = (plain) => {
  const first_char = plain.split(" ").map((val) => val[0]);

  for (let index = 0; index < first_char.length; index++) {
    let char = first_char[index];
    if (
      first_char.indexOf(char) == index &&
      first_char.indexOf(char, index + 1) == -1
    ) {
      return char;
    }
  }
};
