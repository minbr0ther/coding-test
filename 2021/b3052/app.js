const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const items = input.map((item) => +item);

solution(items);

function solution(items) {
  let mySet = new Set();

  items.forEach((n) => mySet.add(Number(n) % 42));

  let answer = [...mySet].length;

  console.log(answer);
}
