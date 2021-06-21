/*
 * [프로그래머스 > 연습문제 > 소수찾기]
 * [HISTORY]
 * 테스트10~12, 효율성 시간초과
 * 에라토스테네스의 체 사용해보기
 * 통과 (new Set() 사용해보기)
 */
function solution(n) {
  let answer = 0;
  let nArr = [0, 1];

  for (let i = 2; i <= n; i++) {
    nArr.push(i);
  }

  for (let i = 2; i <= n + 1; i++) {
    if (nArr[i] != -1) {
      for (let j = i * 2; j <= n + 1; j += i) {
        nArr[j] = -1;
      }
    }
  }

  for (let i = 0; i <= n + 1; i++) {
    if (nArr[i] > 1) {
      answer++;
    }
  }

  return answer;
}

// 테스트
test.each([
  [10, 4],
  [2, 1],
  [3, 2],
  [5, 3],
])("연습 - 소수찾기", (n, result) => {
  expect(solution(n)).toBe(result);
});
