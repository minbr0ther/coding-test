const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const testArr = input.filter((_, i) => i > 0).map(Number);

testArr.forEach((num) => {
  let count = 0;

  const dfs = (x, visited = new Set([x])) => {
    if (x > num) return;
    if (x === num) {
      count++;
    } else {
      for (const nx of [x + 1, x + 2, x + 3]) {
        visited.add(nx);
        dfs(nx);
        visited.delete(nx);
      }
    }
  };
  dfs(0);

  console.log(count);
});
