const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

//  M은 상자의 가로 칸의 수, N은 상자의 세로 칸의 수를 나타낸다
// 2 ≤ M,N ≤ 1,000
const [garo, sero] = input[0].split(" ").map(Number);
// 컴퓨터의 번호 쌍이 주어진다.
const graph = [...input].slice(1).map((str) => str.split(" ").map(Number));

const visited = Array.from(Array(sero), () => Array(garo).fill(false));

let queue = []; // 익은 토마토 위치

const dy = [1, 0, -1, 0];
const dx = [0, 1, 0, -1];

// 그래프 탐색
for (let i = 0; i < sero; i++) {
  for (let j = 0; j < garo; j++) {
    if (graph[i][j] === 1) {
      visited[i][j] = true;
      queue.push([i, j]);
    }
  }
}

let index = 0;
let minDay = 1; // 최대 값 구하기용 비교값

while (true) {
  // 시간 복잡도를 줄이기 위한 꼼수
  let shiftQ = queue[index++];
  if (!shiftQ) break;

  let [x, y] = shiftQ;

  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];

    //방문한적이 없고 0이 아니라면
    if (0 <= nx && nx < sero && 0 <= ny && ny < garo) {
      if (visited[nx][ny] === false && graph[nx][ny] === 0) {
        visited[nx][ny] = true; // 방문 처리
        graph[nx][ny] = graph[x][y] + 1; // 방문횟수 +1 저장
        minDay = Math.max(graph[nx][ny], minDay); // 현재까지의 최대 값
        queue.push([nx, ny]);
      }
    }
  }
}

// 안익은 토마토가 있는지 검사 (0 => 안익은 토마토)
const hasZero = (arr) => arr.some((inner) => inner.includes(0));

// 방문처리를 다 했는데 토마토가 모두 익지는 못하는 상황이면 -1
console.log(hasZero(graph) ? -1 : minDay - 1);
