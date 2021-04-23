/*
 * [프로그래머스 > 월간 코드 첼린지 시즌2 > 음양 더하기]
 * [HISTORY]
 * 통과
 */
function solution(absolutes, signs) {
  let answer = 0;

  for (let i = 0; i < signs.length; i++) {
    if (signs[i]) {
      answer += absolutes[i];
    } else {
      answer -= absolutes[i];
    }
  }

  return answer;
}

// 테스트
test.each([
  [[4, 7, 12], [true, false, true], 9],
  [[1, 2, 3], [true, true, false], 0],
])("연습 - 음양 더하기", (absolutes, signs, result) => {
  expect(solution(absolutes, signs)).toBe(result);
});
