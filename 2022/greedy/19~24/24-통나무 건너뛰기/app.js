const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = Number(input.shift());

const result = [];

for (let i = 0; i < n; i++) {
  const length = Number(input.shift());
  const arr = input.shift().split(' ').map(Number).sort();

  let answer = 0;

  for (let i = 2; i < length; i++) {
    answer = Math.max(answer, Math.abs(arr[i] - arr[i - 2]));
  }

  result.push(answer);
}

console.log(result.join('\n'));
