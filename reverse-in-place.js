const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(`Input : `, (answer) => {
  reverseWordInPlace(answer);
});

const reverseWordInPlace = (plain_text) => {
  let result = "";
  const word = plain_text.split(" ");

  for (let index = 0; index < word.length; index++) {
    result += `${word[index].split("").reverse().join("")} `;
  }

  console.log(result);
};
