const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, m] = input.shift().split(' ').map(Number);
const arr = input
  .shift()
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

const 새는곳리스트 = [[arr[0]]];

for (let i = 1; i < n; i++) {
  if (arr[i] - arr[i - 1] > 1) {
    새는곳리스트.push([arr[i]]);
  } else {
    새는곳리스트[새는곳리스트.length - 1].push(arr[i]);
  }
}

console.log(새는곳리스트);

const result = 새는곳리스트
  .map((arr) => Math.ceil(arr.length / m))
  .reduce((a, b) => a + b);

console.log(result);
