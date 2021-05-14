/*
 * [프로그래머스 > 연습문제 > 자연수 뒤집어 배열로 만들기]
 * [HISTORY]
 * 통과
 */
function solution(n) {
  let answer = [];
  n.toString()
    .split("")
    .forEach((element) => {
      answer.push(parseInt(element));
    });
  answer.reverse();

  return answer;
}

// 테스트
test.each([[12345, [5, 4, 3, 2, 1]]])(
  "연습 - 자연수 뒤집어 배열로 만들기",
  (n, result) => {
    expect(solution(n)).toEqual(result);
  }
);
