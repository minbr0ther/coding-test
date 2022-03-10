const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let N = +input.pop();

const dy = new Array(N + 1).fill(0);

dy[0] = 0;
dy[1] = 1;

for (let i = 2; i <= N; i++) {
  dy[i] = BigInt(dy[i - 1]) + BigInt(dy[i - 2]);
}

console.log(dy[N].toString());
