const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let [n, ...arr] = input;

n = Number(n);
arr = arr.map(Number).reverse();

let cnt = 0;

for (let i = 1; i < n; i++) {
  if (arr[i - 1] <= arr[i]) {
    cnt += arr[i] - arr[i - 1] + 1;
    arr[i] = arr[i - 1] - 1;
  }
}
console.log(cnt);
