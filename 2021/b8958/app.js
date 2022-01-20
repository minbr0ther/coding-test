const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const arrayLength = +input[0];
input.shift();
const items = input.map((item) => item);

solution(arrayLength, items);

function solution(arrayLength, items) {
  items.forEach((n) => {
    let OXList = n.split("");
    let answer = 0;
    let tmp = 0;
    OXList.forEach((n) => {
      if (n === "O") {
        tmp++;
        answer += tmp;
      } else {
        tmp = 0;
      }
    });
    console.log(answer);
  });
}
