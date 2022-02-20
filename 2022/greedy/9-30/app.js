const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const inputArr = input.join("").split("");

if (!inputArr.includes("0")) return console.log("-1");

const tmp = inputArr.reduce((a, b) => a + Number(b), 0);

if (tmp % 3 !== 0) return console.log("-1");

console.log(inputArr.sort((a, b) => b - a).join(""));
