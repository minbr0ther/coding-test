const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [start, finish] = input.shift().split(' ').map(Number);

const position = Array.from({ length: 100_001 }, () => 0);
const queue = [start];

while (queue.length) {
  const x = queue.shift();

  if (x === finish) {
    console.log(position[x]);
    break;
  }

  for (const nx of [x * 2, x - 1, x + 1]) {
    if (!position[nx] && nx >= 0 && nx <= 100_000) {
      if (nx === x * 2) {
        position[nx] = position[x];
        queue.unshift(nx);
      } else {
        position[nx] = position[x] + 1;
        queue.push(nx);
      }
    }
  }
}
