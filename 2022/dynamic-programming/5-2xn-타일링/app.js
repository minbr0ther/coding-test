const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const num = +input[0];

const dy = [0, 1, 2];

for (let i = 3; i <= num; i++) {
  dy[i] = (dy[i - 2] + dy[i - 1]) % 10007;
}

console.log(dy[num]);
