/*
 * [프로그래머스 > 월간 코드 첼린지 시즌3 > 나머지가 1이 되는 수 찾기]
 * [HISTORY]
 * 통과
 */
function solution(n) {
  let answer = 0;
  for (let i = 2; i < n; i++) {
    if ((n - 1) % i == 0) {
      answer = i;
      break;
    }
  }
  answer = answer == 0 ? n - 1 : answer;
  return answer;
}

// 테스트
test.each([
  [10, 3],
  [12, 11],
])("연습 - 나머지가 1이 되는 수 찾기", (n, result) => {
  expect(solution(n)).toBe(result);
});
