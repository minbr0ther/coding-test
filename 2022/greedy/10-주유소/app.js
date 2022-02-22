const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [N, distance, city] = input;
N = BigInt(N);
distance = distance.split(" ").map(BigInt);
city = city.split(" ").map(BigInt);

let cost = BigInt(0);
let lowestPrice = city[0]; // 처음에는 맨 처음 값을 최저가를 지정

for (let i = 0; i < city.length - 1; i++) {
  if (lowestPrice > city[i]) {
    //  현재 값이 최저가보다 작다면 최저가를 갱신해준다.
    lowestPrice = city[i];
  }
  cost += lowestPrice * distance[i];
}
console.log(cost.toString());
