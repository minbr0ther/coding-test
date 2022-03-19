const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input = Number(input);
let result = [0, 0, 0];

while (input) {
  if (input >= 300) {
    input -= 300;
    result[0]++;
    continue;
  } else if (input >= 60) {
    input -= 60;
    result[1]++;
    continue;
  } else if (input >= 10) {
    input -= 10;
    result[2]++;
    continue;
  } else {
    return console.log("-1");
  }
}

console.log(result.join(" "));
