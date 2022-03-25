const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let n = +input.pop();

let result = [];

const 자릿수끼리의_차이가_일인가 = (num) => {
  const arr = String(num).split('').map(Number);

  let flag = true;

  for (let i = 1; i < arr.length; i++) {
    if (Math.abs(arr[i - 1] - arr[i]) !== 1) flag = false;
  }

  return flag;
};

for (let i = 10 ** (n - 1); i < 10 ** n; i++) {
  if (i !== 0 && i >= 10 ** (n - 1)) {
    자릿수끼리의_차이가_일인가(i) && result.push(i);
  }
}

console.log(BigInt(result.length % 1000000000).toString());
