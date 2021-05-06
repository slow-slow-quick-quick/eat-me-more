/*
 * [프로그래머스 > 연습문제 > 문자열 내림차순으로 정렬하기]
 * [HISTORY]
 * 통과
 */
function solution(s) {
  let answer = "";
  let sArr = s.split("");

  sArr.sort(function (a, b) {
    if (a > b) return -1;
    if (b > a) return 1;
    return 0;
  });

  sArr.forEach((element) => {
    answer += element;
  });

  return answer;
}

// 테스트
test.each([
  ["Zbcdefg", "gfedcbZ"],
  ["Aa", "aA"],
])("연습 - 문자열 내림차순 정렬하기", (s, result) => {
  expect(solution(s)).toBe(result);
});
