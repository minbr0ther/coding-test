function solution(n) {
  let answer = [];
  let ch = Array.from({ length: n + 1 }, () => 0);

  const DFS = (v) => {
    if (v === n + 1) {
      let tmp = '';
      for (let i = 1; i < ch.length; i++) {
        ch[i] && (tmp += i + ' ');
      }
      tmp.length && answer.push(tmp.trim());
    } else {
      ch[v] = 1;
      DFS(v + 1);
      ch[v] = 0;
      DFS(v + 1);
    }
  };
  DFS(1);

  return answer;
}

solution(3).forEach((n) => console.log(n));
// [ '1 2 3', '1 2', '1 3', '1', '2 3', '2', '3' ]
