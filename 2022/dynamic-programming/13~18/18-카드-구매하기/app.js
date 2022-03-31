const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let n = +input.shift();
const arr = input.shift().split(' ').map(Number);

const newArr = arr.map((num, i) => ({
  piece: i + 1,
  price: num,
  ratio: num / (i + 1),
}));

newArr.sort((a, b) => b.ratio - a.ratio);

let result = 0;

for (const cardPack of newArr) {
  if (!n) break;
  if (cardPack.piece <= n) {
    result += Math.floor(n / cardPack.piece) * cardPack.price;
    n = n % cardPack.piece;
  }
}

console.log(result);
