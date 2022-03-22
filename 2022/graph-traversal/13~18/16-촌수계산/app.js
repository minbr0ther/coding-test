const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let [n, aAndB, m, ...arr] = input;
n = Number(n);
const [a, b] = aAndB.split(' ').map(Number);
m = Number(m);
arr = arr.map((str) => str.split(' ').map(Number));

const tree = new Map();

Array.from({ length: n }, (_, i) => tree.set(i + 1, []));

arr.forEach((arr) => {
  const [start, end] = arr;

  tree.get(start).push(end);
  tree.get(end).push(start);
});

const queue = [];
const check = new Array(n + 1).fill(0);
let result = -1;

for (const next of tree.get(a)) {
  queue.push(next);
}

while (queue.length) {
  const node = queue.shift();

  if (node === b) result = check[node] + 1;

  for (const next of tree.get(node)) {
    if (check[next]) continue;

    check[next] = check[node] + 1;
    queue.push(next);
  }
}

console.log(result);
