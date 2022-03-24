const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, min, max] = input.shift().split(' ').map(Number);

const board = input.map((str) => str.split(' ').map(Number));

const [dx, dy] = [
  [0, 1, 0, -1],
  [1, 0, -1, 0],
];

let flag = true;
const ans = {};

const queue = [];

const bfs = (x, y, value, check) => {
  queue.push([x, y]);
  check[x][y] = value;

  let sum = board[x][y];
  let num = 1;

  while (queue.length) {
    const [x, y] = queue.pop();

    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];

      if (nx < 0 || ny < 0 || nx >= n || ny >= n || check[nx][ny] > 0) {
        continue;
      }
      const target = Math.abs(board[x][y] - board[nx][ny]);
      if (target >= min && target <= max) {
        queue.push([nx, ny]);
        check[nx][ny] = value;
        sum += board[nx][ny];
        num += 1;
        flag = true;
      }
    }
  }
  return { sum, num };
};

const reSettingMap = (check) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      board[i][j] = ans[check[i][j]];
    }
  }
};

const solution = () => {
  let result = 0;
  let cnt = 1;

  while (true) {
    flag = false;

    const check = Array.from(Array(n), () => new Array(n).fill(0));

    board.forEach((mapElement, i) => {
      mapElement.forEach((_, j) => {
        if (check[i][j] === 0) {
          const { sum, num } = bfs(i, j, cnt, check);
          const avg = Math.floor(sum / num);
          ans[cnt] = avg;
          cnt++;
        }
      });
    });

    if (!flag) return result;

    reSettingMap(check);

    result += 1;
  }
};

console.log(solution());
