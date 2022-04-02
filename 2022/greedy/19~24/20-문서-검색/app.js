const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let [string, target] = input;

let count = 0;

while (string.indexOf(target) !== -1) {
  string = string.replace(target, '');
  count++;
}

console.log(count);
