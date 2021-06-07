/*
 * [프로그래머스 > 연습문제 > 소수찾기]
 * [HISTORY]
 * 테스트10~12, 효율성 시간초과
 */
function solution(n) {
  var answer = 0;

  if (n === 2) return 1;

  for (let i = 3; i <= n; i++) {
    let flag = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        flag = false;
        j = i;
      }
    }
    if (flag) {
      answer++;
    }
  }

  return answer + 1;
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
