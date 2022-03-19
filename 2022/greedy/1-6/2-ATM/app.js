const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input[0];
const arr = input[1].split(' ').map((n) => +n);

const tmp = [];

arr.sort((a, b) => a - b);

arr.forEach((n, i) => {
  if (i > 0) {
    tmp.push(tmp[i - 1] + n);
  } else {
    tmp.push(n);
  }
});

console.log(tmp.reduce((a, b) => a + b));
