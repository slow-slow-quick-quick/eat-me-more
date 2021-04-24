/*
 * [프로그래머스 > 연습문제 > 이상한 문자 만들기]
 * [HISTORY]
 * 공백은 1개 이상이라는 조건을 고려하지 않음
 */
function solution(s) {
  let answer = "";

  s.split(" ").forEach((e1) => {
    e1.split("").forEach((e2, idx) => {
      if (idx % 2 == 0) {
        answer += e2.toUpperCase();
      } else {
        answer += e2.toLowerCase();
      }
    });
    answer += " ";
  });

  return answer.trim();
}

// 테스트
test.each([
  ["try   hello world", "TrY   HeLlO WoRlD"],
  ["ABCDE ", "AbCdE"],
])("연습 - 이상한 문자 만들기", (s, result) => {
  expect(solution(s)).toBe(result);
});
