const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

// 세로 길이 5, 가로 길이 7, 직사각형 개수 3
const [m, n, k] = input.shift().split(" ").map(Number);

const arr = input.map((str) => str.split(" ").map(Number));

const board = new Array(m).fill(0).map(() => new Array(n).fill(0));

// fill graph
arr.forEach((ele) => {
  // beforeLeftTop, beforeRightBottom, AfterLeftTop, afterRightBottom
  // 0, 2, 4, 4 => [[0,2],[0,3],[1,2], ... , [3,2],[3,3]]
  const [blt, brb, alt, arb] = ele;

  for (let x = blt; x < alt; x++) {
    for (let y = brb; y < arb; y++) {
      board[y][x] = 1;
    }
  }
});

const dy = [-1, 0, 1, 0];
const dx = [0, 1, 0, -1];

let count = 0;

const dfs = (y, x) => {
  for (let i = 0; i < 4; i++) {
    const [ny, nx] = [y + dy[i], x + dx[i]];

    if (ny >= 0 && ny < m && nx >= 0 && nx < n && !board[ny][nx]) {
      board[ny][nx] = 1;
      count++;
      dfs(ny, nx);
    }
  }
};

const result = [];

for (let i = 0; i < m; i++) {
  for (let j = 0; j < n; j++) {
    if (!board[i][j]) {
      count = 0;
      dfs(i, j);
      result.push(count ? count : 1);
    }
  }
}

console.log(result.length + "\n" + result.sort((a, b) => a - b).join(" "));
