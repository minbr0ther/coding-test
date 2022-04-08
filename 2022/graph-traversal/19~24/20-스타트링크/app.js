const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

// 10 : 총 F층,
// 1 : 스타트링크가 있는 곳의 위치는 G층
// 10 : 강호가 지금 있는 곳은 S층, 이제 엘리베이터를 타고 G층으로 이동
// 2 : U버튼은 위로 U층을 가는 버튼,
// 1 : D버튼은 아래로 D층을 가는 버튼이다.
// 만약, 엘리베이터를 이용해서 G층에 갈 수 없다면, "use the stairs"를 출력
const [F, S, G, U, D] = input.shift().split(' ').map(Number);

const building = Array.from({ length: 1000001 }, () => 0);
const visited = new Set([S]);
const queue = [S];

let result;

while (queue.length) {
  const x = queue.shift();

  if (x === G) {
    result = String(building[x]);
    break;
  }

  for (const nx of [x - D, x + U]) {
    if (!visited.has(nx) && nx >= 1 && nx <= F) {
      visited.add(nx);
      building[nx] = building[x] + 1;
      queue.push(nx);
    }
  }
}

console.log(result ? result : 'use the stairs');
