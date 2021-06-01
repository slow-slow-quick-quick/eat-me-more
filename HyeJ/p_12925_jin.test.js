/*
 * [프로그래머스 > 연습문제 > 문자열을 정수로 바꾸기]
 * [HISTORY]
 * 통과
 *
 */
function solution(s) {
  var answer = parseInt(s); // s/1 가능
  return answer;
}

// 테스트
test.each([
  ["1234", 1234],
  ["-1234", -1234],
])("연습 - 문자열을 정수로 바꾸기", (s, result) => {
  expect(solution(s)).toBe(result);
});
