const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [firstNum, secondNum] = input.pop().split(" ").map(Number);

let result = -1;

const dfs = (x, count = 1) => {
  if (x === secondNum) {
    result = count;
    return;
  }

  for (const nx of [x * 2, Number(x + "1")]) {
    if (nx <= secondNum) {
      dfs(nx, count + 1);
    }
  }
};
dfs(firstNum);

console.log(result);
