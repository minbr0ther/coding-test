const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [N, str] = input;
N = +N;
const arr = str.split(" ").map(Number);

let max = arr[0];

for (let i = 1; i < N; i++) {
  if (arr[i - 1] > 0 && arr[i - 1] + arr[i] > 0) {
    arr[i] += arr[i - 1];
  }

  if (max < arr[i]) {
    max = arr[i];
  }
}

console.log(max);

// 참고: https://junghyeonsu.tistory.com/210
