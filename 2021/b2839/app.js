const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let n = fs.readFileSync(filePath).toString();

solution(n);

function solution(n) {
  let answer = Number.MAX_SAFE_INTEGER;
  let threeMaxtry = parseInt(n / 3); //2
  let fiveMaxTry = parseInt(n / 5); //1
  let check = 0;

  for (let i = 0; i <= threeMaxtry; i++) {
    for (let j = 0; j <= fiveMaxTry; j++) {
      let value = i * 3 + j * 5;
      if (value === +n) {
        answer = Math.min(answer, i + j);
        check = 1;
      }
    }
  }
  answer = check === 1 ? answer : -1;
  console.log(answer);
}
