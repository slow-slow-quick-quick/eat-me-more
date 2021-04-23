/*
 * [프로그래머스 > 월간 코드 첼린지 시즌1 > 내적]
 * [HISTORY]
 * 통과
 */
function solution(a, b) {
  let answer = 0;

  for (let i = 0; i < a.length; i++) {
    answer += a[i] * b[i];
  }

  return answer;
}

// 테스트
test.each([
  [[1, 2, 3, 4], [-3, -1, 0, 2], 3],
  [[-1, 0, 1], [1, 0, -1], -2],
])("연습 - 내적", (a, b, result) => {
  expect(solution(a, b)).toBe(result);
});
