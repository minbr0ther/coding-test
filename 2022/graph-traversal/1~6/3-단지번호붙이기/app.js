const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

//  N(정사각형이므로 가로와 세로의 크기는 같으며 5≤N≤25)이 입력되고
// 그 다음 N줄에는 각각 N개의 자료(0혹은 1)가 입력된다.
const [N] = input[0].split(' ').map((n) => +n);
const graph = [...input].slice(1).map((str) => str.split('').map((n) => +n));

const dx = [0, 0, -1, 1];
const dy = [1, -1, 0, 0];

const bfs = (y, x) => {
  let count = 1;
  const queue = [];

  graph[y][x] === 0;
  queue.push([y, x]);

  while (queue.length) {
    let [y, x] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const ny = y + dy[i];
      const nx = x + dx[i];

      if (nx >= 0 && nx < N && ny >= 0 && ny < N) {
        if ((graph[ny][nx] = 1)) {
          graph[ny][nx] = 0;
          queue.push([ny, nx]);
          count++;
        }
      }
    }
  }

  return count;
};

const answer = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (graph[i][j] === 1) {
      answer.push(bfs(i, j));
    }
  }
}

console.log(answer);
