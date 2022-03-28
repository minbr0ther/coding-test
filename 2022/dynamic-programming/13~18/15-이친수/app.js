const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input.shift();

const dp = Array.from({ length: n + 1 }, () => 0);

dp[1] = 1;
dp[2] = 1;

// 1로 시작한다
for (let i = 3; i <= n; i++) {
  dp[i] = BigInt(dp[i - 2]) + BigInt(dp[i - 1]);
}

console.log(dp[n].toString());
