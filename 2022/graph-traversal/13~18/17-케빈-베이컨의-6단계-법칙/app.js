const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, m] = input.shift().split(' ').map(Number);

const arr = input.map((str) => str.split(' ').map(Number));

const tree = new Map();

Array.from({ length: n }, (_, i) => tree.set(i + 1, []));

arr.forEach((arr) => {
  const [start, end] = arr;

  tree.get(start).push(end);
  tree.get(end).push(start);
});

const result = [];

for (let i = 1; i <= n; i++) {
  const queue = [i];
  const check = new Array(n + 1).fill(0);

  while (queue.length) {
    const node = queue.shift();

    for (const next of tree.get(node)) {
      if (check[next]) continue;

      check[next] = check[node] + 1;
      queue.push(next);
    }
  }

  check[i] = 0;

  result.push(check.reduce((a, b) => a + b));
}

console.log(result.indexOf(Math.min(...result)) + 1);
