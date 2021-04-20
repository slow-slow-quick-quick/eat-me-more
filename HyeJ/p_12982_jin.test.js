/*
 * [프로그래머스 > Summer/Winter Coding(~2018) > 예산]
 * [HISTORY]
 * 다양한 테스트 케이스 체크 필요
 */
function solution(d, budget) {
  let answer = 0;
  let total = 0;

  d.sort().forEach((element) => {
    total += element;
    if (total <= budget) {
      answer += 1;
    }
  });

  return answer;
}

// 테스트
test.each([
  [[1, 3, 2, 5, 4], 9, 3],
  [[2, 2, 3, 3], 10, 4],
])("연습 - 예산", (d, budget, result) => {
  expect(solution(d, budget)).toBe(result);
});
