function solution(m, arr) {
  let answer = Number.MAX_SAFE_INTEGER;
  let n = arr.length;

  dfs = (num, L = 0) => {
    if (num > m || L > answer) return;
    console.log(num, L);
    if (num === m) {
      answer = Math.min(answer, L);
    } else {
      for (let i = 0; i < n; i++) {
        dfs(num + arr[i], L + 1);
      }
    }
  };
  dfs(0);

  return answer;
}

let arr = [1, 2, 5];
console.log(solution(15, arr));
