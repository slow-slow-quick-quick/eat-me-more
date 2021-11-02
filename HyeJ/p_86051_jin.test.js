/*
 * [프로그래머스 > 월간 코드 첼린지 시즌3 > 없는 숫자 더하기]
 * [HISTORY]
 * 통과
 */
function solution(numbers) {
  let answer = 0;

  for (let i = 0; i < 10; i++) {
    if (!numbers.includes(i)) {
      answer += i;
    }
  }

  return answer;
}

// 테스트
test.each([
  [[1, 2, 3, 4, 6, 7, 8, 0], 14],
  [[5, 8, 4, 0, 6, 7, 9], 6],
])("연습 - 약수의 개수와 덧셈", (numbers, result) => {
  expect(solution(numbers)).toBe(result);
});
