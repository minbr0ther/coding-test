const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input.shift();
const arr = input.map(Number);

const result = [1, 1, 1, 2, 2]; // 0~4

arr.forEach((num) => {
  if (!result[num - 1]) {
    for (let i = result.length; i < num; i++) {
      result.push(result[i - 5] + result[i - 1]);
    }
  }
});

console.log(arr.map((n) => result[n - 1]).join('\n'));
