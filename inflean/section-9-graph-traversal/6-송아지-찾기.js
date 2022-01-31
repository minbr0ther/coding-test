function solution(s, e) {
  let answer = 0;

  const check = new Set([s]);
  const distance = new Map([[s, 0]]);
  const queue = [s];

  while (queue.length) {
    let x = queue.shift();

    for (let nx of [x - 1, x + 1, x + 5]) {
      if (nx === e) return distance.get(x) + 1;
      if (nx >= 1 && nx <= 10000 && !check.has(nx)) {
        check.add(nx);
        queue.push(nx);
        distance.set(nx, distance.get(x) + 1);
      }
    }
  }

  return answer;
}

console.log(solution(8, 3));
