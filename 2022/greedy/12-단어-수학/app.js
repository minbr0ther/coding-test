const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const makeAlphabetObj = (input) => {
  const obj = {};
  input.slice(1).map((str) => {
    str
      .split("")
      .reverse()
      .forEach((el, i) => {
        obj[el] = !obj[el] ? 10 ** i : obj[el] + 10 ** i;
      });
  });
  return obj;
};

const obj = makeAlphabetObj(input);
console.log(obj);
const objToArr = Object.entries(obj).sort((a, b) => b[1] - a[1]);

let number = 9;
let sum = 0;
for (const [, value] of objToArr) {
  sum += value * number--;
}

console.log(sum);

// 참고: https://kscodebase.tistory.com/511
