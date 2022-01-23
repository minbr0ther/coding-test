function solution(n, m) {
  let answer = [];
  let tmp = Array.from({ length: m }, () => 0);

  const dfs = (L) => {
    if (L === m) {
      answer.push(tmp);
    } else {
      for (let i = 1; i <= n; i++) {
        tmp[L] = i;
        dfs(L + 1);
      }
    }
  };
  dfs(0);

  return answer;
}

// 3: 숫자 가지수, 2: 트리의 높이
console.log(solution(3, 2));
