const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [N, ...arr] = input;
N = +N;
arr = arr.map(Number);
const dy = new Array(N).fill(0);

dy[0] = arr[0];
dy[1] = arr[0] + arr[1];
dy[2] = Math.max(dy[1], dy[0] + arr[2], arr[1] + arr[2]);

for (let i = 3; i < N; i++) {
  dy[i] = Math.max(
    dy[i - 3] + arr[i - 1] + arr[i],
    dy[i - 2] + arr[i],
    dy[i - 1]
  );
}

console.log(dy[N - 1]);

// 참고: https://junghyeonsu.tistory.com/210
