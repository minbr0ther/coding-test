const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

// 정점의 개수, 간선의 개수
const [N, M] = input.shift().split(" ").map(Number);
const edges = input.map((str) => str.split(" ").map(Number));

const graph = new Map();
Array.from({ length: N }, (_, i) => graph.set(i + 1, []));

edges.forEach((edge) => {
  const [u, v] = edge;

  graph.get(u).push(v);
  graph.get(v).push(u);
});

let cnt = 0;
const visited = new Set();

const DFS = (current) => {
  visited.add(current);

  // i ~ next의 개수만큼
  for (let i = 0; i < graph.get(current).length; i++) {
    const next = graph.get(current)[i];

    if (!visited.has(next)) {
      DFS(next);
    }
  }
};

for (let i = 1; i <= N; i++) {
  if (!visited.has(i)) {
    DFS(i);
    cnt++;
  }
}

console.log(cnt);

// 출처: https://kscodebase.tistory.com/395
