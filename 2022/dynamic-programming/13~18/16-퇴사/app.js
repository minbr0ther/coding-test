const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input.shift();
const arr = input.map((str) => str.split(' ').map(Number));

const dp = new Array(n).fill(0);

for (let i = 0; i < n; i++) {
  const [needDay, income] = arr[i];

  if (i + needDay > n) continue;

  dp[i] += income;

  for (let j = i + needDay; j < n; j++) {
    dp[j] = Math.max(dp[i], dp[j]);
  }

  console.log(dp);
}

console.log(Math.max(...dp));
