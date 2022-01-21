const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let n = +input[0];
const arrA = input[1].split(' ').map((n) => +n);
const arrB = input[2].split(' ').map((n) => +n);

arrA.sort((a, b) => a - b);

let newArrB = [...arrB];
const multipleArr = [];

arrA.forEach((v) => {
  let max = Math.max(...newArrB);

  multipleArr.push(v * max);

  newArrB = newArrB.filter((n) => n < max);
});

console.log(multipleArr.reduce((a, b) => a + b));
