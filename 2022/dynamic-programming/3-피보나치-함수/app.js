const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const testArr = input.filter((_, i) => i > 0).map(Number);

testArr.forEach((ele) => {
  const fibonacci = [
    [1, 0],
    [0, 1],
  ];

  for (let j = 2; j <= ele; j++) {
    fibonacci[j] = [
      fibonacci[j - 1][0] + fibonacci[j - 2][0],
      fibonacci[j - 1][1] + fibonacci[j - 2][1],
    ];
  }

  console.log(fibonacci[ele].join(" "));
});
