const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = input.shift().split(" ").map(Number);
const graph = input.map((str) => str.split(""));
const 색맹graph = graph.map((arr) =>
  arr.map((char) => {
    if (char === "G") return "R";
    else return char;
  })
);

const dy = [1, 0, -1, 0];
const dx = [0, 1, 0, -1];

const result = { R: 0, G: 0, B: 0 };
const 색맹result = { R: 0, B: 0 };

const dfs = (y, x, inputGraph) => {
  const char = inputGraph[y][x].slice();

  inputGraph[y][x] = "C";

  for (let i = 0; i < 4; i++) {
    const ny = y + dy[i];
    const nx = x + dx[i];

    if (nx >= 0 && nx < N && ny >= 0 && ny < N) {
      if (inputGraph[ny][nx] === char) {
        dfs(ny, nx, inputGraph);
      }
    }
  }
};

for (let y = 0; y < N; y++) {
  for (let x = 0; x < N; x++) {
    if (graph[y][x] !== "C") {
      result[graph[y][x]]++;
      dfs(y, x, graph);
    }
  }
}

for (let y = 0; y < N; y++) {
  for (let x = 0; x < N; x++) {
    if (색맹graph[y][x] !== "C") {
      색맹result[색맹graph[y][x]]++;
      dfs(y, x, 색맹graph);
    }
  }
}

const sum = Object.values(result).reduce((a, b) => a + b);
const 색맹sum = Object.values(색맹result).reduce((a, b) => a + b);

console.log(sum + " " + 색맹sum);
