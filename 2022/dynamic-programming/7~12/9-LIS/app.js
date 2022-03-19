const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [N, arr] = input;
N = +N;
arr = arr.split(" ").map(Number);

const dp = new Array(N).fill(0);

for (let i = 0; i < N; i++) {
  let max = 0;
  for (let j = 0; j < i; j++) {
    if (arr[i] > arr[j] && dp[j] > max) {
      max = dp[j];
    }
  }
  dp[i] = max + 1;
}

console.log(Math.max(...dp));

// 참고: https://leylaoriduck.tistory.com/524
