const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const arrayLength = +input[0];
const inputArray = [];
for (let i = 1; i <= arrayLength; i++) {
  const arr = input[i].split(" ");
  inputArray.push({
    H: arr[0],
    W: arr[1],
    N: arr[2],
  });
}

solution(arrayLength, inputArray);

function solution(arrayLength, inputArray) {
  inputArray.forEach((arr) => {
    let startNum = arr.N % arr.H;
    let endNum = Math.ceil(arr.N / arr.H);
    let result = endNum < 10 ? startNum + "0" + endNum : startNum + endNum;
    console.log(result);
  });
}
