function solution(m, arr) {
  let answer = [];
  n = arr.length;
  let ch = Array.from({ length: n }, () => 0); // [0,0,0]
  let tmp = Array.from({ length: m }, () => 0); // [0,0]

  const dfs = (L) => {
    if (L === m) {
      answer.push(tmp.slice());
    } else {
      for (let i = 0; i < n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          tmp[L] = arr[i];
          dfs(L + 1);
          ch[i] = 0;
        }
      }
    }
  };
  dfs(0);

  return answer;
}

let arr = [3, 6, 9];
console.log(solution(2, arr));
