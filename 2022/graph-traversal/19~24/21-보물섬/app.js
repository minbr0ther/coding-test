const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [sero, garo] = input.shift().split(' ').map(Number);
const map = input.map((str) => str.split(''));
const [dy, dx] = [
  [1, 0, -1, 0],
  [0, 1, 0, -1],
];

const bfs = (i, j) => {
  const visited = Array.from({ length: sero }, () =>
    Array.from({ length: garo }, () => 0),
  );
  visited[i][j] = 1;
  const queue = [[i, j]];

  let max = 0;

  while (queue.length) {
    const [y, x] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const [ny, nx] = [y + dy[i], x + dx[i]];

      if (ny >= 0 && ny < sero && nx >= 0 && nx < garo) {
        if (!visited[ny][nx] && map[ny][nx] === 'L') {
          visited[ny][nx] = visited[y][x] + 1;
          max = Math.max(max, visited[ny][nx]);
          queue.push([ny, nx]);
        }
      }
    }
  }

  return max - 1;
};

let result = 0;

for (let i = 0; i < sero; i++) {
  for (let j = 0; j < garo; j++) {
    if (map[i][j] === 'L') {
      result = Math.max(result, bfs(i, j));
    }
  }
}

console.log(result);
