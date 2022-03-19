const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

// 첫째 줄에 두 정수 N, M(2 ≤ N, M ≤ 100)이 주어진다.
// 다음 N개의 줄에는 M개의 정수로 미로가 주어진다.
const [N, M] = input[0].split(' ').map((n) => +n);

/*
[
  [ 1, 0, 1, 1, 1, 1 ],
  [ 1, 0, 1, 0, 1, 0 ],
  [ 1, 0, 1, 0, 1, 1 ],
  [ 1, 1, 1, 0, 1, 1 ]
]
*/
const graph = [...input].slice(1).map((str) => str.split('').map((n) => +n));

const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];
let answer = Number.MAX_SAFE_INTEGER;

const dfs = (y, x, L) => {
  if (y === N - 1 && x === M - 1) {
    answer = Math.min(answer, L);
  } else {
    for (let i = 0; i < 4; i++) {
      const ny = y + dy[i];
      const nx = x + dx[i];

      if (nx >= 0 && nx < M && ny >= 0 && ny < N) {
        if (graph[ny][nx] === 1) {
          graph[ny][nx] = 0;
          dfs(ny, nx, L + 1);
          graph[ny][nx] = 1;
        }
      }
    }
  }
};
graph[0][0] = 1;
dfs(0, 0, 1);

console.log(answer);
