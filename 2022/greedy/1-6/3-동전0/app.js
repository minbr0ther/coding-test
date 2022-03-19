const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let [N, K] = input
  .shift()
  .split(' ')
  .map((n) => +n);
const arr = input.map((n) => +n);

let answer = 0;
/*
10 4200 [
  1,    5,    10,
 50,  100,   500,
1000, 5000, 10000,
50000
]
*/

while (K > 0) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (K >= arr[i]) {
      K -= arr[i];
      answer++;
      break;
    }
  }
}

console.log(answer);
