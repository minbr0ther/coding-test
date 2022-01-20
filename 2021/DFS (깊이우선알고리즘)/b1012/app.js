const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const info = input[0];
const inputArray = [];
for (let i = 1; i < input.length; i++) {
  const arr = input[i].split(' ').map((n) => +n);
  inputArray.push(arr);
}

solution(info, inputArray);

function solution(info, inputArray) {
  //가로길이, 세로길이, 배추가 심어져 있는 위치의 개수
  const [m, n, k] = info.split(' ').map((n) => +n);

  //그래프 초기화
  let graph = Array.from(Array(n), () => Array(m).fill(0)); //세로길이 n=3, 가로길이 m=5
  inputArray.forEach((arr) => {
    let [x, y] = arr;
    graph[y][x] = 1;
  });

  const dfs = (y, x) => {
    const dx = [0, 1, 0, -1];
    const dy = [-1, 0, 1, 0];

    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];

      if (nx >= 0 && nx < m && ny >= 0 && ny < n) {
        if (graph[ny][nx] === 1) {
          graph[ny][nx] = 0;
          dfs(ny, nx);
        }
      }
    }
  };

  //지렁이수
  let answer = 0;

  for (let i = 0; i < m; i++) {
    //가로길이 m 5
    for (let j = 0; j < n; j++) {
      //세로길이 n 3
      if (graph[j][i] === 1) {
        dfs(j, i);
        answer++;
      }
    }
  }

  console.log(answer);
}
