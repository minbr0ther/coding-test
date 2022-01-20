const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let n = +input[0];
const arr = input
  .map((n, i) => {
    if (i > 0) return n.split(' ').map((n) => +n);
  })
  .filter((n) => n !== undefined);

arr.sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0];
  } else {
    return a[1] - b[1];
  }
});

/*
  [
  [ 1, 4 ],   [ 3, 5 ],
  [ 0, 6 ],   [ 5, 7 ],
  [ 3, 8 ],   [ 5, 9 ],
  [ 6, 10 ],  [ 8, 11 ],
  [ 8, 12 ],  [ 2, 13 ],
  [ 12, 14 ]
]
  */

console.log();
