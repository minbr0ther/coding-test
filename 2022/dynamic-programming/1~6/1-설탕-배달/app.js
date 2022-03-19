const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let N = +input[0];
let count = 0;

while (true) {
  if (N % 5 === 0) {
    count += N / 5;
    console.log(count);
    break;
  }
  N -= 3;
  count++;
  if (N < 0) {
    console.log(-1);
    break;
  }
}
