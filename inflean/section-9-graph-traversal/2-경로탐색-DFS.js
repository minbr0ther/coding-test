function solution(n, arr) {
  let answer = [];

  const graph = new Map();

  Array.from({ length: n }, (_, i) => {
    graph.set(i + 1, []);
  });

  arr.forEach((arr) => {
    const [start, end] = arr;

    graph.get(start).push(end);
  });

  const dfs = (v, visited = new Set([1])) => {
    if (v === n) {
      answer.push(Array.from(visited));
    } else {
      graph.get(v).forEach((next) => {
        if (!visited.has(next)) {
          visited.add(next);
          dfs(next, visited);
          visited.delete(next);
        }
      });
    }
  };
  dfs(1);

  return answer;
}

let arr = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
];
console.log(solution(5, arr));
