/*
 * [프로그래머스 > 월간 코드 챌린지 시즌1 > 3진법 뒤집기]
 * [HISTORY]
 * 통과
 */
function solution(n) {
  var answer = 0;
  var str = "";
  var l = 0;

  while (n > 0) {
    str += n % 3;
    n = parseInt(n / 3);
  }

  l = str.length;
  str.split("").forEach((e, idx) => {
    answer += parseInt(e) * Math.pow(3, l - idx - 1);
  });

  return answer;
}

// 테스트
test.each([
  [45, 7],
  [125, 229],
])("연습 - 3진법 뒤집기", (n, result) => {
  expect(solution(n)).toBe(result);
});
