/*
 * [프로그래머스 > 연습문제 > 시저암호]
 * [HISTORY]
 * 진행
 */
function solution(s, n) {
  let answer = "";

  s.split("").forEach((e) => {
    var originCode = e.charCodeAt(0);
    var newCode = originCode + n;

    if (originCode >= "A".charCodeAt(0) && originCode <= "Z".charCodeAt(0)) {
      newCode = newCode > "Z".charCodeAt(0) ? newCode - 26 : newCode;
      answer += String.fromCharCode(newCode);
    } else if (
      originCode >= "a".charCodeAt(0) &&
      originCode <= "z".charCodeAt(0)
    ) {
      newCode = newCode > "z".charCodeAt(0) ? newCode - 26 : newCode;
      answer += String.fromCharCode(newCode);
    } else {
      answer += e;
    }
  });

  return answer;
}

// 테스트
test.each([
  ["AB", 1, "BC"],
  ["z", 1, "a"],
  ["a B z", 4, "e F d"],
  ["Z ", 2, "B "],
  ["y", 25, "x"],
  ["bC", 25, "aB"],
  ["z", 3, "c"],
])("연습 - 시저암호", (s, n, result) => {
  expect(solution(s, n)).toBe(result);
});
