const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const result = [];

const dx = [0, 1, 1, 1, 0, -1, -1, -1];
const dy = [1, 1, 0, -1, -1, -1, 0, 1];

while (input.length) {
  if (input[0] === "0 0") break;

  const [w, h] = input.shift().split(" ").map(Number);
  const edges = [];
  Array.from({ length: h }, () => {
    edges.push(input.shift().split(" ").map(Number));
  });

  const dfs = (y, x) => {
    for (let i = 0; i < 8; i++) {
      const ny = y + dy[i];
      const nx = x + dx[i];

      if (ny >= 0 && ny < h && nx >= 0 && nx < w) {
        if (edges[ny][nx] === 1) {
          edges[ny][nx] = 0;
          dfs(ny, nx);
        }
      }
    }
  };

  let cnt = 0;

  // i 세로, j 가로
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (edges[i][j] === 1) {
        edges[i][j] = 0;
        cnt++;
        // console.log(cnt);
        dfs(i, j);
      }
    }
  }

  result.push(cnt);
}

console.log(result.join("\n"));
