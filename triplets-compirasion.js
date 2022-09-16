const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(`Input Score A : `, (answer_a) => {
  readline.question(`INput Score B : `, (answer_b) => {
    compirasion(answer_a, answer_b);
  });
});

const compirasion = (score_a, score_b) => {
  const array_a = score_a.split(" ").map(Number);
  const array_b = score_b.split(" ").map(Number);

  let result_a = 0;
  let result_b = 0;

  for (let index = 0; index < 3; index++) {
    if (array_a[index] > array_b[index]) {
      //   console.log("point a");
      result_a += 1;
    }

    if (array_b[index] > array_a[index]) {
      //   console.log("point b");
      result_b += 1;
    }
  }

  console.log([result_a, result_b]);
};
