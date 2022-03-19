const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let string = input[0];

console.log(
  string
    .split('-') // -를 기준으로 쪼갠다
    .map((str) => {
      if (str.split('').includes('+')) {
        //+가 들어있는 str을 찾는다
        // +기준으로 쪼개서 합을 더한뒤 반환한다
        return str.split('+').reduce((a, b) => Number(a) + Number(b));
      } else {
        // str에 +가 없으면 그냥 반환한다
        return Number(str);
      }
    }) // 최종적으로 남은 요소들을 - 연산 해준다
    .reduce((a, b) => Number(a) - Number(b))
);
