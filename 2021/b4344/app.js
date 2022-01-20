const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const arrayLength = +input[0];
const inputArray = [];
for (let i = 1; i <= arrayLength; i++) {
  const arr = input[i].split(" ");
  inputArray.push({
    N: +arr[0],
    arr: arr.slice(1).map((item) => +item),
  });
}

solution(arrayLength, inputArray);

function solution(C, inputArray) {
  inputArray.forEach((obj) => {
    let sum = obj.arr.reduce((a, b) => a + b, 0);
    let avg = sum / obj.N;
    let 평균넘는학생수 = obj.arr.filter((n) => n > avg).length;
    let percent = (평균넘는학생수 / obj.N) * 100;
    console.log(percent.toFixed(3) + "%");
  });
}
