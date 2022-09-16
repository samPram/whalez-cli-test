const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let your_array = [];

readline
  .on("line", (line) => {
    your_array.push(line);
  })
  .on("close", () => {
    // Do what you need to do with lines here
    console.log(checkDuplicate(your_array));
    process.exit(0);
  });

const checkDuplicate = (array) => {
  //   console.log(typeof array, array);
  const uniq = [...new Set(array)];
  return uniq;
};
