const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let n = +input.shift();
const arr = input.map((v) => v.split(' ').map(Number));

const result = [];

const facto = (x) => {
  if (x === 0 || x === 1) {
    return 1;
  } else {
    return x * facto(x - 1);
  }
};

const comb = (n, r) => {
  return Math.floor(facto(n) / (facto(r) * facto(n - r)));
};

arr.forEach((v) => {
  const [west, east] = v;

  result.push(comb(east, west));
});

console.log(result.join('\n'));
