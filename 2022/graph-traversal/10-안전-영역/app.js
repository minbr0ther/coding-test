const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = input.shift().split(" ").map(Number);
const graph = input.map((str) => str.split(" ").map(Number));

const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

let result = 0;

for (let h = 2; h <= 100; h++) {
  let cnt = 0;
  let newGraph = JSON.parse(JSON.stringify(graph));

  const dfs = (y, x) => {
    for (let i = 0; i < 4; i++) {
      const ny = y + dy[i];
      const nx = x + dx[i];

      if (ny >= 0 && ny < N && nx >= 0 && nx < N) {
        if (newGraph[ny][nx] > h) {
          newGraph[ny][nx] = h;
          dfs(ny, nx);
        }
      }
    }
  };

  for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {
      if (newGraph[y][x] > h) {
        newGraph[y][x] = h;
        cnt++;
        dfs(y, x);
      }
    }
  }

  if (cnt === 0) break;
  result = Math.max(result, cnt);
}

console.log(result);
