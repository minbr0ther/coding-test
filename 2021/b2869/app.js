const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs.readFileSync(filePath).toString().split(" ");
let a = arr[0];
let b = arr[1];
let v = arr[2];

solution(a, b, v);

function solution(a, b, v) {
  let answer = 0;
  let sum = 0;
  while (sum <= v) {
    sum += a;
    answer++;
    if (sum >= v) console.log(answer);
    sum -= b;
  }
}
