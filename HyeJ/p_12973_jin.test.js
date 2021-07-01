/*
 * [프로그래머스 > 2017 팁스타운 > 짝지어 제거하기]
 * [HISTORY]
 * 실패 - 시간초과 (정규식 사용)
 * 통과 - stack 사용
 */
function solution(s) {
  let answer = -1;
  let sArr = s.split("");

  if (s.length % 2 !== 0) return 0;

  let stack = [];

  sArr.forEach((e) => {
    if (stack.length > 0) {
      if (stack[stack.length - 1] === e) stack.pop();
      else stack.push(e);
    } else {
      stack.push(e);
    }
  });

  return stack.length === 0 ? 1 : 0;
}

// 테스트
test.each([
  ["baabaa", 1],
  ["cdcd", 0],
])("2017 팀스타운 - 짝지어 제거하기", (s, result) => {
  expect(solution(s)).toBe(result);
});
