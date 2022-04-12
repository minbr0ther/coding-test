const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, m] = input.shift().split(' ').map(Number);
const graph = input.map((str) => str.split(' ').map(Number));

const [dy, dx] = [
  [1, 0, -1, 0],
  [0, 1, 0, -1],
];

const visited = Array.from({ length: n }, () =>
  Array.from({ length: m }, () => 0),
);

let result = 0;
const queue = [[0, 0]];

while (queue.length) {
  const [y, x] = queue.shift();

  if (y === n - 1 && x === m - 1) {
    result++;
  }

  for (let i = 0; i < 4; i++) {
    const [ny, nx] = [y + dy[i], x + dx[i]];

    if (ny >= 0 && ny < n && nx >= 0 && ny < m && !visited[ny][nx]) {
      if (graph[y][x] > graph[ny][nx]) {
        visited[ny][nx] = 1;
        queue.push([ny, nx]);
        visited[ny][nx] = 0;
      }
    }
  }
}

console.log(result);
