const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input.shift();

const dp = new Array(n + 1).fill(0);

dp[1] = 1;
dp[2] = 3;

for (let i = 3; i <= n; i++) {
  dp[i] = dp[i - 1] + dp[i - 2] * 2;
}

console.log(dp[n]);
