const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const arr = input.shift().split(" ");

const minSum = arr
  .map((str) =>
    str
      .split("")
      .map((num) => (num === "6" ? "5" : num))
      .join("")
  )
  .map(Number)
  .reduce((a, b) => a + b);

const maxSum = arr
  .map((str) =>
    str
      .split("")
      .map((num) => (num === "5" ? "6" : num))
      .join("")
  )
  .map(Number)
  .reduce((a, b) => a + b);

console.log(minSum + " " + maxSum);
