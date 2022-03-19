const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const makeAlphabetObj = (input) => {
  const obj = {};

  input.slice(1).map((str) => {
    str
      .split("") //['G','C','F']
      .reverse() //['F','C','G']
      .forEach((el, i) => {
        // obj에 있으면, 있는 것 + 그 자릿수 ++
        // 없으면, obj에 그 자릿수 세팅
        obj[el] = obj[el] ? obj[el] + 10 ** i : 10 ** i;
      });
  });
  return obj;
};

const obj = makeAlphabetObj(input);
// 자릿수가 높은 순서대로 정렬
const objToArr = Object.entries(obj).sort((a, b) => b[1] - a[1]);

let number = 9; // 들어갈 수 있는 최대 숫자
let sum = 0;
for (const [, value] of objToArr) {
  sum += value * number--;
}

console.log(sum);

// 참고: https://kscodebase.tistory.com/511
