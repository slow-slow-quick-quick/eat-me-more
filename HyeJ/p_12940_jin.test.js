/*
 * [프로그래머스 > 연습문제 > 최대공약수와 최소공배수]
 * [HISTORY]
 * 통과
 */
function solution(n, m) {
  let answer = [];
  let nArr = [
    [1, 1],
    [n, 1],
  ];
  let mArr = [
    [1, 1],
    [m, 1],
  ];
  let nMod = n;
  let i = 2;
  let cnt = 0;

  while (n >= 1) {
    nMod = nMod / i;
  }

  return answer;
}

// 테스트
test.each([
  [3, 12, [3, 12]],
  [2, 5, [1, 10]],
])("연습 - 최대공약수와 최소공배수", (n, m, result) => {
  expect(solution(n, m)).toEqual(result);
});
