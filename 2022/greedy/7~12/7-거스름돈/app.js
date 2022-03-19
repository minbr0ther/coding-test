const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let change = 1000 - Number(input);
let count = 0;

while (change > 0) {
  if (change >= 500) {
    change -= 500;
    count++;
    continue;
  }
  if (change >= 100) {
    change -= 100;
    count++;
    continue;
  }
  if (change >= 50) {
    change -= 50;
    count++;
    continue;
  }
  if (change >= 10) {
    change -= 10;
    count++;
    continue;
  }
  if (change >= 5) {
    change -= 5;
    count++;
    continue;
  }
  if (change >= 1) {
    change -= 1;
    count++;
    continue;
  }
}

console.log(count);
