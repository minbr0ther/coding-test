const fs = require('fs');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : '/Users/jeongminhyeong/boj/2022/graph-traversal/19~24/23-이진-검색-트리/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

const stack = [];
const result = [];

// 전위 순회 결ㅏ 배열의 시작, 끝 인덱스 삽입
stack.push([0, input.length - 1]);

while (stack.length) {
  const [start, end] = stack.pop();

  if (start > end) continue;

  // 루트보다 큰 숫자들 중 가장 앞 숫자가 오른쪽 서브트리의 루트
  let pivot;
  for (let i = start + 1; i <= end; i++) {
    if (input[i] < input[start]) continue;

    pivot = i;
    break;
  }

  if (pivot) {
    stack.push([start + 1, pivot - 1]);
    stack.push([pivot, end]);
  } else {
    stack.push([start + 1, end]);
  }

  result.unshift(input[start]);
}

console.log(result.join('\n'));
