const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let [n, m] = input.shift().split(' ').map(Number);
const arr = input.shift().split(' ').map(Number);

for (let i = 0; i < m; i++) {
  arr.sort();
  const sum = BigInt(arr[0]) + BigInt(arr[1]);
  arr[0] = sum;
  arr[1] = sum;
}

console.log(arr.reduce((a, b) => BigInt(a) + BigInt(b)).toString());
