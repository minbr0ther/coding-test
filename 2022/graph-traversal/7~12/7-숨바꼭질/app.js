const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [s, e] = input.pop().split(" ").map(Number);
const ch = Array.from({ length: 100001 }, () => 0);

const queue = [[s, 0]];
ch[s] = 1;

while (queue.length) {
  const [x, time] = queue.shift();

  if (x === e) return console.log(time);

  for (const nx of [x - 1, x + 1, x * 2]) {
    if (nx >= 0 && nx <= 100000 && ch[nx] === 0) {
      ch[nx] = 1;
      queue.push([nx, time + 1]);
    }
  }
}

// 출처 : https://gobae.tistory.com/37
