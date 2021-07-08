/*
 * [프로그래머스 > 연습문제 > JadenCase 문자열 만들기]
 * [HISTORY]
 * 실패
 * 첫번째 문자가 숫자만 있는 것은 아니라고 생각함 -> 수정 -> 실패
 * 공백 개수가 그대로 유지되어야 함
 */
function solution(s) {
  let answer = "";

  let first_chr = s.split("")[0];
  let sArr = s.split(" ");

  for (var i = 0; i < sArr.length; i++) {
    for (var j = 0; j < sArr[i].length; j++) {
      if (i === 0) {
        if (j === 0) {
          if (
            ("a" <= first_chr && first_chr <= "z") ||
            ("A" <= first_chr && first_chr <= "Z")
          ) {
            sArr[i] = sArr[i].replace(
              sArr[i].split("")[j],
              sArr[i].split("")[j].toUpperCase()
            );
          } else {
            sArr[i] = sArr[i].replace(
              sArr[i].split("")[j + 1],
              sArr[i].split("")[j + 1].toLowerCase()
            );
            j++;
          }
        } else {
          sArr[i] = sArr[i].replace(
            sArr[i].split("")[j],
            sArr[i].split("")[j].toLowerCase()
          );
        }
      } else {
        if (j === 0) {
          sArr[i] = sArr[i].replace(
            sArr[i].split("")[j],
            sArr[i].split("")[j].toUpperCase()
          );
        } else {
          sArr[i] = sArr[i].replace(
            sArr[i].split("")[j],
            sArr[i].split("")[j].toLowerCase()
          );
        }
      }
    }
    answer += sArr[i] + " ";
  }

  return answer.trim(" ");
}

// 테스트
test.each([
  ["3people unFollowed me", "3people Unfollowed Me"],
  ["for the last week", "For The Last Week"],
])("연습 - JadenCase 문자열 만들기", (s, result) => {
  expect(solution(s)).toBe(result);
});
