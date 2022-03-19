const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input.shift();

const result = [];

const dy = [2, 1, -1, -2, -2, -1, 1, 2];
const dx = [1, 2, 2, 1, -1, -2, -2, -1];

while (input.length) {
  const bl = +input.shift();
  const before = input.shift().split(" ").map(Number);
  const [afterX, afterY] = input.shift().split(" ").map(Number);

  const bfs = () => {
    const queue = [before];
    const visited = new Set([before[0] + "," + before[1]]);
    let count = 0;

    while (queue.length) {
      for (let i = 0; i < queue.length; i++) {
        const [x, y] = queue.shift();

        if (x === afterX && y === afterY) return count;

        for (let j = 0; j < dy.length; j++) {
          const ny = y + dy[j];
          const nx = x + dx[j];

          if (
            nx >= 0 &&
            nx < bl &&
            ny >= 0 &&
            ny < bl &&
            !visited.has(nx + "," + ny)
          ) {
            visited.add(nx + "," + ny);
            queue.push([nx, ny]);
          }
        }
      }
      count++;
    }
  };

  console.log(bfs());
}
