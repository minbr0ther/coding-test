function solution(m, arr) {
  let answer = Number.MAX_SAFE_INTEGER;
  let n = arr.length;

  const dfs = (L, num) => {
    if (num < 0) return;
    if (num === 0) {
      answer = Math.min(answer, L);
    } else {
      for (let i = 0; i < n; i++) {
        dfs(L + 1, num - arr[i]);
      }
    }
  };
  dfs(0, 15);

  return answer;
}

let arr = [1, 2, 5];
console.log(solution(15, arr));
