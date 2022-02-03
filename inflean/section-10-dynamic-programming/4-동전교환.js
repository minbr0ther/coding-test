function solution(m, coin) {
  const answer = [];
  const count = new Map([[0, 0]]);
  const visited = new Set([0]);

  const dfs = (x) => {
    for (const adder of coin) {
      const nx = x + adder;

      if (nx > m) return;
      if (nx === m) answer.push(count.get(x) + 1);
      if (!visited.has(nx)) {
        visited.add(nx);
        count.set(nx, count.get(x) + 1);
        dfs(nx);
        visited.delete(nx);
      }
    }
  };
  dfs(0);

  return Math.min(...answer);
}

let arr = [1, 2, 5];
console.log(solution(15, arr));
