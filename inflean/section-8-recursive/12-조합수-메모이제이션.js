function solution(n, r) {
  let answer = [];
  let dy = Array.from(Array(35), () => Array(35).fill(0));

  const memo = {};

  const combi = (n, r) => {
    if (n + ',' + r in memo) return memo[n + ',' + r];
    if (n === r || r === 0) return 1;

    return (memo[n + ',' + r] = combi(n - 1, r - 1) + combi(n - 1, r));
  };

  combi(n, r);

  return memo[n + ',' + r];
}

console.log(solution(33, 19));
