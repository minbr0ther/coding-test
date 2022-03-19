const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [N, ...arr] = input;
N = +N;
arr = arr.map(Number);

const dp = new Array(N).fill(0);

dp[0] = arr[0];
dp[1] = Math.max(arr[1], arr[0] + arr[1]);
dp[2] = Math.max(dp[0] + arr[2], arr[1] + arr[2]);

for (let i = 3; i < N; i++) {
  // 전전칸을 밟고 현재칸으로 온 경우, 전칸을 밟았으면 전전은 밟으면 안되기 때문에 전전전칸에서 시작했을 경우를 생각
  dp[i] = Math.max(dp[i - 2] + arr[i], dp[i - 3] + arr[i - 1] + arr[i]);
}

console.log(dp[N - 1]);
