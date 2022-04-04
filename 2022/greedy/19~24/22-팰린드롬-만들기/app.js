const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('');

const getPermutations = function (arr, selectNumber) {
  const results = [];

  if (selectNumber === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutations = getPermutations(rest, selectNumber - 1);
    const attached = permutations.map((el) => [fixed, ...el]);
    results.push(...attached);
  });

  return results;
};

const test = new Set(
  getPermutations(input, input.length).map((arr) => arr.join(''))
);

console.log(
  Array.from(test)
    .filter((str) => str === str.split('').reverse().join(''))
    .sort()
    .shift() || "I'm Sorry Hansoo"
);
