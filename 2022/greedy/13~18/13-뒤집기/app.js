const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const arr = input.pop().split("").map(Number);
let result = 0;

for (let i = 1; i < arr.length; i++) {
  if (arr[i] !== arr[i - 1]) {
    result++;
  }
}

console.log(result % 2 === 0 ? result / 2 : (result + 1) / 2);

// 참조: https://yoonplan.tistory.com/8
