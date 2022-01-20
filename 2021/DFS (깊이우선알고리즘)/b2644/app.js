const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input[0];
const pairNumber = input[1];
const m = +input[2];
const inputArray = [];
for (let i = 3; i < n + 1; i++) {
  const arr = input[i].split(' ').map((n) => +n);
  inputArray.push(arr);
}

solution(n, pairNumber, m, inputArray);

function solution(N, pairNumber, M, inputArray) {
  const adjacencyList = new Map();

  const nodes = Array.from({ length: N }, (_, i) => i + 1);

  nodes.forEach((n) => adjacencyList.set(n, []));
  inputArray.forEach((route) => {
    adjacencyList.get(route[0]).push(route[1]);
    adjacencyList.get(route[1]).push(route[0]);
  });
  const [start, end] = pairNumber.split(' ');
  let result = 0;

  const visited = new Set(start); //7

  const queue = [start]; //7

  while (queue.length) {
    const destinations = adjacencyList.get(+queue.shift());

    for (const destination of destinations) {
      if (destination == end) {
        console.log(++result);
        return;
      }
      if (!visited.has(destination)) {
        visited.add(destination);
        queue.push(destination);
      }
    }
    result++;
  }

  if (!visited.has(end)) console.log(-1);
}
