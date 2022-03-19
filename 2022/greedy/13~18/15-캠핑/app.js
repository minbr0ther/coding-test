const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let caseCnt = 1;

while (true) {
  const [L, P, V] = input.shift().split(" ").map(Number);

  if (L === 0 && P === 0 && V === 0) {
    break;
  }

  console.log(
    `Case ${caseCnt}: ${L * Math.floor(V / P) + (V % P > L ? L : V % P)}`
  );

  caseCnt += 1;
}

// 참조: https://velog.io/@otterp/백준-4796-캠핑-자바스크립트
