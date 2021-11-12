/*
 * [프로그래머스 > 2021 카카오 채용연계형 인턴십 > 숫자 문자열과 영단어]
 * [HISTORY]
 * 3개 실패 -> 같은 단어가 여러번 나오는 경우 체크 못함 (ex. oneoneone)
 * 해결-> RegExp 사용하여 전체를 검사 (replace 시킬 문자열이 변수이므로 replace(/#/g, "") 사용 못함, replaceAll 없음)
 */
function solution(s) {
  let answer = "";
  let numArr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  numArr.forEach((element, idx) => {
    let regexAll = new RegExp(element, "g");
    s = s.replace(regexAll, idx);
  });
  answer = Number(s);
  return answer;
}

// 테스트
test.each([
  ["one4seveneight", 1478],
  ["23four5six7", 234567],
  ["2three45sixseven", 234567],
  ["123", 123],
  ["oneoneone", 111],
])("연습 - 숫자 문자열과 영단어", (s, result) => {
  expect(solution(s)).toBe(result);
});
