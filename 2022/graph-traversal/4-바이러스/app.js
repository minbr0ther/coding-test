const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

// 첫째 줄에는 컴퓨터의 수가 주어진다.
const [comCount] = input[0].split(' ').map((n) => +n);
// 컴퓨터의 번호 쌍이 주어진다.
const pairOfCom = [...input]
  .slice(2)
  .map((str) => str.split(' ').map((n) => +n));

const graph = new Map();

Array.from({ length: comCount }, (_, i) => {
  graph.set(i + 1, []);
});

pairOfCom.forEach((arr) => {
  const [a, b] = arr;

  graph.get(a).push(b);
  graph.get(b).push(a);
});

const visited = new Set([1]);

const DFS = (v) => {
  graph.get(v).forEach((next) => {
    if (!visited.has(next)) {
      visited.add(next);
      DFS(next);
    }
  });
};
DFS(1);

console.log(visited.size - 1);
