function solution(s, e) {
  const check = new Set([s]);
  const distance = new Map([[s, 0]]);
  const queue = [s];

  while (queue.length) {
    const x = queue.shift();

    for (const nx of [x - 1, x + 1, x + 5]) {
      if (nx === e) return distance.get(x) + 1;
      if (!check.has(nx)) {
        check.add(nx);
        queue.push(nx);
        distance.set(nx, distance.get(x) + 1);
        console.log(distance);
      }
    }
  }
}

console.log(solution(8, 3));
