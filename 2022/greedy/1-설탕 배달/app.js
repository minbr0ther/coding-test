const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input[0];

solution(n);

function solution(n) {
  var cnt = 0;

  while (n > 0) {
    if (n % 5 == 0) {
      n = n - 5;
      cnt++;
    } else if (n % 3 == 0) {
      n = n - 3;
      cnt++;
    } else if (n > 5) {
      n = n - 5;
      cnt++;
    } else {
      cnt = -1;
      break;
    }
  }
  console.log(cnt);
}
