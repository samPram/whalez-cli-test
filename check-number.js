const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(`Input : `, (number) => {
  console.log(checkIsPrimeNumber(Number(number)));
});

const checkIsPrimeNumber = (number) => {
  if (number === 1) {
    return false;
  } else if (number === 2) {
    return true;
  } else {
    for (let index = 2; index < number; index++) {
      if (number % index === 0) {
        return false;
      }
    }
    return true;
  }
};
