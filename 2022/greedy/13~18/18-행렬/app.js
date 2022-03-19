const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input.shift().split(" ");
const arr = input.map((str) => str.split("").map(Number));

const beforeArr = arr.slice(0, n);
const afterArr = arr.slice(n);

const reverse = (x, y) => {
  for (let i = x; i < x + 3; i++) {
    for (let j = y; j < y + 3; j++) {
      beforeArr[i][j] = beforeArr[i][j] ? 0 : 1;
    }
  }
};

const check = () => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (beforeArr[i][j] !== afterArr[i][j]) return false;
    }
  }

  return true;
};

let count = 0;

for (let i = 0; i < n - 2; i++) {
  // 0까지만
  for (let j = 0; j < m - 2; j++) {
    // 0,1
    if (beforeArr[i][j] !== afterArr[i][j]) {
      reverse(i, j);
      count += 1;
    }
  }
}

check() ? console.log(count) : console.log(-1);

// 참조: https://jokerldg.github.io/algorithm/2021/03/14/matrix.html
