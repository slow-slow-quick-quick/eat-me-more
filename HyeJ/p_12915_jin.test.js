/*
 * [프로그래머스 > 연습문제 > 문자열 내 마음대로 정렬하기]
 * [HISTORY]
 * 통과
 */
function solution(strings, n) {
  let answer = [];
  let tmpStr = [];

  strings.forEach((e) => {
    tmpStr.push(e.split("")[n] + e);
  });
  tmpStr.sort();
  tmpStr.forEach((e) => {
    answer.push(e.substring(1));
  });

  return answer;
}

// 테스트
test.each([
  [["sun", "bed", "car"], 1, ["car", "bed", "sun"]],
  [["abce", "abcd", "cdx"], 2, ["abcd", "abce", "cdx"]],
])("연습 - 문자열 내림차순 정렬하기", (Strings, n, result) => {
  expect(solution(Strings, n)).toEqual(result);
});
