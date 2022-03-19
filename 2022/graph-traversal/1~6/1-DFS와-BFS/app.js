const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

// 첫째 줄에 정점의 개수 N(1 ≤ N ≤ 1,000)
// 간선의 개수 M(1 ≤ M ≤ 10,000)
// 탐색을 시작할 정점의 번호 V가 주어진다
const [N, M, V] = input[0].split(' ').map((n) => +n);

// [ [ 1, 2 ], [ 1, 3 ], [ 1, 4 ], [ 2, 4 ], [ 3, 4 ] ]
const lines = [...input].slice(1).map((str) => str.split(' ').map((n) => +n));

const vertexes = Array.from({ length: N }, (_, i) => i + 1);
const graph = new Map();

vertexes.forEach((n) => graph.set(n, []));

lines.forEach((arr) => {
  const [start, end] = arr;
  graph.get(start).push(end);
  graph.get(end).push(start);
});

//방문할 수 있는 정점이 여러 개인 경우에는 정점 번호가 작은 것을 먼저 방문
// => 정렬로 해결
for ([key, value] of graph) {
  value.sort((a, b) => a - b);
}

/*
[
  [ 1, [ 2, 3, 4 ] ],
  [ 2, [ 1, 4 ] ],
  [ 3, [ 1, 4 ] ],
  [ 4, [ 1, 2, 3 ] ]
]
*/

const dfs = (n, visted = new Set([V])) => {
  if (visted.size === N) {
    console.log(Array.from(visted).join(' '));
  } else {
    const nextVertexes = graph.get(n);

    for (let nv of nextVertexes) {
      if (!visted.has(nv)) {
        visted.add(nv);
        dfs(nv, visted);
      }
    }
  }
};
dfs(V);

const bfs = (n, visted = new Set([V])) => {
  const queue = [n];

  while (queue.length) {
    if (visted.size === N) {
      console.log(Array.from(visted).join(' '));
      return;
    }

    const vertex = queue.shift();

    graph.get(vertex).forEach((nv) => {
      if (!visted.has(nv)) {
        visted.add(nv);
        queue.push(nv);
      }
    });
  }
};
bfs(V);
