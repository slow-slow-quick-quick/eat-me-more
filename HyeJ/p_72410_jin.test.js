/*
 * [프로그래머스 > 2021 카카오 블라인드 > 신규 아이디 추천]
 * [HISTORY]
 * 실패 : 6번, 24번 -> 대문자를 소문자로 변환하는 함수 수정
 * 통과 (정규식으로도 작성해보기)
 */
function solution(new_id) {
  let answer = "";
  let newIdArr = new_id.split("");

  let changeUpperCase = (prevChr, newIdChr) =>
    prevChr.toLowerCase() + newIdChr.toLowerCase();
  let changeOneDot = (prevChr, newIdChr) => {
    if (prevChr.split("")[prevChr.length - 1] === "." && newIdChr === ".") {
      return prevChr;
    } else {
      return prevChr + newIdChr;
    }
  };

  // 1단계. 대문자 -> 소문자로 치환
  newIdArr = newIdArr.reduce(changeUpperCase).split("");
  // 2단계. 사용 불가한 문자 제거 (가능문자: 알파벳 소문자, 숫자, 빼기, 밑줄, 마침표)
  newIdArr = newIdArr.filter((e) => {
    return (
      ("a".charCodeAt(0) <= e.charCodeAt(0) &&
        e.charCodeAt(0) <= "z".charCodeAt(0)) ||
      ("0".charCodeAt(0) <= e.charCodeAt(0) &&
        e.charCodeAt(0) <= "9".charCodeAt(0)) ||
      e == "-" ||
      e == "_" ||
      e == "." ||
      e === " "
    );
  });
  // 3단계. 2번 이상의 연속된 마침표 -> 1개로 치환
  newIdArr = newIdArr.reduce(changeOneDot).split("");
  // 4단계. 처음 or 끝에 위치한 '.' 제거
  if (newIdArr[0] === ".") {
    newIdArr.splice(0, 1);
  }
  if (newIdArr[newIdArr.length - 1] === ".") {
    newIdArr.splice(newIdArr.length - 1, 1);
  }
  // 5단계. 빈 문자열인 경우 a대입
  if (newIdArr.length === 0) {
    newIdArr.push("a");
  } else {
    newIdArr.forEach((e, idx) => {
      if (e === " ") newIdArr[idx] = "a";
    });
  }
  // 6단계. 문자열 길이 최대 15로 조정 & 맨뒤 마침표 제거
  if (newIdArr.length >= 16) {
    newIdArr.splice(15);
    if (newIdArr[14] === ".") {
      newIdArr.splice(14, 1);
    }
  }
  // 7단계. 최소 3의 길이로 맞추기
  while (newIdArr.length < 3) {
    newIdArr.push(newIdArr[newIdArr.length - 1]);
  }
  newIdArr.forEach((e) => {
    answer += e;
  });
  return answer;
}

// 테스트
test.each([
  ["...!@BaT#*..y.abcdefghijklm", "bat.y.abcdefghi"],
  ["z-+.^.", "z--"],
  ["=.=", "aaa"],
  ["123_.def", "123_.def"],
  ["abcdefghijklmn.p", "abcdefghijklmn"],
  ["aaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaa"],
  ["aaa", "aaa"],
  [" ", "aaa"],
  ["abcdefghijklmnopqrstuvwxyz", "abcdefghijklmno"],
  ["[][][][][][][][][][].", "aaa"],
  [".", "aaa"],
  ["...", "aaa"],
  ["...a...", "aaa"],
  ["...abc...", "abc"],
  ["...a.b.c...", "a.b.c"],
  ["aaaa.", "aaaa"],
  ["AAAAA..", "aaaaa"],
])("연습 - 신규 아이디 추천", (new_id, result) => {
  expect(solution(new_id)).toBe(result);
});
