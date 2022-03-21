const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input.shift();
const arr = input.map((str) => str.split(' ').map(Number));

const tree = new Map();

Array.from({ length: n }, (_, i) => tree.set(i + 1, []));

arr.forEach((arr) => {
  const [start, end] = arr;

  tree.get(start).push(end);
  tree.get(end).push(start);
});

let check = Array.from({ length: n + 1 }, () => 0);

const bfs = () => {
  const queue = [];

  for (let next of tree.get(1)) {
    check[next] = 1; //부모의 값을 넣어준다
    queue.push(next);
  }

  while (queue.length) {
    const node = queue.shift();

    for (const next of tree.get(node)) {
      if (check[next]) continue;

      check[next] = node;
      queue.push(next);
    }
  }
};
bfs();

console.log(check.slice(2).join('\n'));

// 참고 : https://gobae.tistory.com/44
