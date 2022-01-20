const fs = require('fs');
const { setegid } = require('process');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const info = input[0];
const inputArray = [];
for (let i = 1; i < input.length; i++) {
  const arr = input[i].split(' ').map((n) => +n);
  inputArray.push(arr);
}

solution(info, inputArray);

function solution(info, inputArray) {
  //정점의 개수, 간선의 개수, 탐색을 시작할 정점 번호
  const [m, n, v] = info.split(' ').map((n) => +n);
  //4 5 1 [ [ 1, 2 ], [ 1, 3 ], [ 1, 4 ], [ 2, 4 ], [ 3, 4 ] ]

  //그래프 초기화
  let graph = new Map();

  for (let i = 1; i <= m; i++) {
    graph.set(i, []);
  }

  inputArray.forEach((arr) => {
    const [start, end] = arr;
    graph.get(start).push(end);
    graph.get(end).push(start);
  });

  //방문할 수 있는 정점이 여러 개인 경우에는 정점 번호가 작은 것을 먼저 방문
  // => 정렬로 해결
  for ([key, value] of graph) {
    value.sort((a, b) => a - b);
  }

  let dfsVisited = new Set([v]);
  let dfsResult = [v];

  const dfs = (start) => {
    graph.get(start).forEach((n) => {
      if (!dfsVisited.has(n)) {
        dfsVisited.add(n);
        dfsResult.push(n);
        dfs(n);
      }
    });
  };
  dfs(v);
  console.log(dfsResult.join(' '));

  let bfsResult = [v];
  const bfs = (start) => {
    const visited = new Set([v]);
    const queue = [start];

    while (queue.length > 0) {
      const startNode = queue.shift();
      const endNodes = graph.get(startNode);
      for (let endNode of endNodes) {
        if (!visited.has(endNode)) {
          visited.add(endNode);
          queue.push(endNode);
          bfsResult.push(endNode);
        }
      }
    }
  };
  bfs(v);
  console.log(bfsResult.join(' '));
}
