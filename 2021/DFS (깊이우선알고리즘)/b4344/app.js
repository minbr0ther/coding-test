const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const arrayLength = +input[0];
const inputArray = [];
for (let i = 1; i <= arrayLength; i++) {
  const arr = input[i].split(' ').map((n) => +n);
  inputArray.push(arr);
}

solution(arrayLength, inputArray);

function solution(n, inputArray) {
  let visit = Array.from(Array(n), () => Array(n).fill(0));

  let queue = [[0, 0]];

  while (queue.length) {
    let [x, y] = queue.shift();

    let dx = [1, 0];
    let dy = [0, 1];

    if (inputArray[x][y] === -1) {
      console.log('HaruHaru');
      return;
    }

    const jump = inputArray[x][y];

    for (let i = 0; i < 2; i++) {
      let nx = x + dx[i] * jump;
      let ny = y + dy[i] * jump;

      if (nx >= 0 && nx < n && ny >= 0 && ny < n && visit[nx][ny] === 0) {
        visit[nx][ny] = 1;
        queue.push([nx, ny]);
      }
    }
  }
  console.log('hing');
}
