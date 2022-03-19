const fs = require("fs");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "/Users/jeongminhyeong/boj/2022/greedy/11-신입-사원/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = input.shift();
const testCase = {};
let key = "";
input.forEach((str) => {
  if (str.length === 1) {
    key = str;
    testCase[key] = [];
  } else {
    testCase[key].push(str.split(" ").map(Number));
  }
});

Object.values(testCase).forEach((arr) => {
  arr.sort((a, b) => a[0] - b[0]);

  let minRank = arr[0][1];
  let cnt = 1;
  for (let i = 0; i < arr.length; i++) {
    const rank = arr[i][1];

    if (rank < minRank) {
      minRank = rank;
      cnt += 1;
    }
  }
  console.log(cnt);
});
