const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [R, C] = input.shift().split(" ").map(Number);
const graph = input.map((str) => str.split(""));

const dy = [1, 0, -1, 0];
const dx = [0, 1, 0, -1];

let result = 0;
const visited = new Set([graph[0][0]]);

const dfs = (y, x, count = 1) => {
  result = Math.max(result, count);

  for (let i = 0; i < 4; i++) {
    const ny = y + dy[i];
    const nx = x + dx[i];

    if (ny >= 0 && ny < R && nx >= 0 && nx < C) {
      if (!visited.has(graph[ny][nx])) {
        visited.add(graph[ny][nx]);
        dfs(ny, nx, ++count);
        --count;
        visited.delete(graph[ny][nx]);
      }
    }
  }
};

dfs(0, 0);

console.log(result);
