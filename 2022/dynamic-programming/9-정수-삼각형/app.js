const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [N, ...arr] = input;
N = +N;
arr = arr.map((str) => str.split(" ").map(Number));

for (let i = N - 1; i >= 0; i--) {
  for (let j = 0; j < i; j++) {
    arr[i - 1][j] += Math.max(arr[i][j], arr[i][j + 1]);
  }
}

console.log(arr[0][0]);

// 참고: https://velog.io/@longroadhome/프로그래머스-LV.3-정수-삼각형-JS
