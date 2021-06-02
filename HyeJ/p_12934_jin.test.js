/*
 * [프로그래머스 > 연습문제 > 정수 제곱근 판별]
 * [HISTORY]
 * 통과
 */
function solution(n) {
  let answer = 0;
  let sqrtN = Math.sqrt(n);

  if (Number.isInteger(sqrtN)) {
    answer = Math.pow(sqrtN + 1, 2);
  } else {
    answer = -1;
  }
  return answer;
}

// 테스트
test.each([
  [121, 144],
  [3, -1],
])("연습 - 정수 제곱근 판별", (n, result) => {
  expect(solution(n)).toBe(result);
});
