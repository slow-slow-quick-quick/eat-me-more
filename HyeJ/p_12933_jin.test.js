/*
 * [프로그래머스 > 연습문제 > 정수 내림차순으로 정리하기]
 * [HISTORY]
 * 통과
 */
function solution(n) {
  let answer = "";
  let nArr = n.toString().split("");

  nArr
    .sort((a, b) => b - a)
    .forEach((e) => {
      answer += e;
    });

  return parseInt(answer);
}

// 테스트
test.each([[118372, 873211]])(
  "연습 - 정수 내림차순으로 정리하기",
  (n, result) => {
    expect(solution(n)).toBe(result);
  }
);
