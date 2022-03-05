const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [N, ...arr] = input;
N = +N;
arr = arr.map(Number);

const dp = new Array(N).fill(0);

dp[0] = arr[0];
dp[1] = Math.max(arr[0] + arr[1], arr[1]);
dp[2] = Math.max(arr[0] + arr[2], arr[1] + arr[2]);

for (let i = 3; i < N; i++) {
  dp[i] = Math.max(dp[i - 3] + arr[i - 1] + arr[i], dp[i - 2] + arr[i]);
}

console.log(dp);
