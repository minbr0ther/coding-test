const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const count = +input[0];
const inputArray = [];
for (let i = 2; i < count + 1; i++) {
  const arr = input[i].split(' ').map((n) => +n);
  inputArray.push(arr);
}

solution(count, inputArray);

function solution(N, inputArray) {
  //7 [ [ 1, 2 ], [ 2, 3 ], [ 1, 5 ], [ 5, 2 ], [ 5, 6 ], [ 4, 7 ] ]
  const adjacencyList = new Map();

  const nodes = Array.from({ length: N }, (_, i) => i + 1);

  nodes.forEach((n) => adjacencyList.set(n, []));
  inputArray.forEach((route) => {
    adjacencyList.get(route[0]).push(route[1]);
    adjacencyList.get(route[1]).push(route[0]);
  });
  // 1 => [ 2, 5 ],
  // 2 => [ 1, 3, 5 ],
  // 3 => [ 2 ],
  // 4 => [ 7 ],
  // 5 => [ 1, 2, 6 ],
  // 6 => [ 5 ],
  // 7 => [ 4 ]

  const visited = new Set();

  const queue = [1];

  while (queue.length) {
    const computer = queue.shift();

    const destinations = adjacencyList.get(computer);

    for (const destination of destinations) {
      if (!visited.has(destination)) {
        visited.add(destination);
        queue.push(destination);
      }
    }
  }

  console.log(visited.size - 1);
}
