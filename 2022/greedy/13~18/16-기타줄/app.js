const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input.shift().split(" ").map(Number);
const arr = input.map((str) => str.split(" ").map(Number));

const packageMin = Math.min(...arr.map((ele) => ele[0]));
const pieceMin = Math.min(...arr.map((ele) => ele[1]));

const needPackage = Math.floor(n / 6);
const needPiece = n - needPackage * 6;

let result = 0;

if (packageMin / 6 < pieceMin) {
  result =
    packageMin * needPackage +
    (needPiece * pieceMin > packageMin ? packageMin : needPiece * pieceMin);
} else {
  result = pieceMin * n;
}

console.log(result);

// 참조: https://tesseractjh.tistory.com/67
