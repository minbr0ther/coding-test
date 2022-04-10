const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input.shift(); // 트리의 노드의 개수 N
const node = input.shift().split(' ').map(Number);
const target = +input.shift(); // 셋째 줄에는 지울 노드의 번호가 주어진다.

const graph = new Map();

node.forEach((v, i) => {
  if (v === -1) {
    graph.set(0, []);
  } else {
    if (graph.get(v)) {
      graph.get(v).push(i);
    } else {
      graph.set(v, [i]);
    }
  }
});

graph.delete(target);

const queue = [0];
const visited = [];

while (queue.length) {
  const x = queue.shift();

  if (!graph.get(x)) {
    x && visited.push(x);
    continue;
  }

  graph.get(x).forEach((nx) => {
    if (nx !== target) {
      queue.push(nx);
    }
  });
}

console.log(visited.length);
