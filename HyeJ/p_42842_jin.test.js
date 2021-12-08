/*
 * [프로그래머스 > 완전탐색 > 카펫]
 * [HISTORY]
 * 통과
 */
function solution(brown, yellow) {
  let answer = [];

  for (let i = 1; i <= Math.sqrt(yellow); i++) {
    if (yellow % i === 0) {
      let n = i;
      let m = yellow / i;
      if ((n + m) * 2 + 4 === brown) {
        answer = [Math.max(n + 2, m + 2), Math.min(n + 2, m + 2)];
      }
    }
  }

  return answer;
}

// 테스트
test.each([
  [10, 2, [4, 3]],
  [8, 1, [3, 3]],
  [24, 24, [8, 6]],
])("완전탐색 - 카펫", (brown, yellow, result) => {
  expect(solution(brown, yellow)).toEqual(result);
});
