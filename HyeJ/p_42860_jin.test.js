/*
 * [프로그래머스 > 그리드 > 조이스틱]
 * [HISTORY]
 * 4, 7, 8, 11 실패 -> 반대로 가는 경우 지나간 길을 다시 가는 경우 발생 -> 11성공
 * 4, 7, 8 실패 -> 시작자리에서 반대를 먼저 다녀오는 경우가 더 가까울 수 있음
 */
function solution(name) {
  let strLength = name.length;
  let nameArry = name.split("");
  let preIdx = 0;
  let answer = 0;

  nameArry.forEach((element, idx) => {
    if (element != "A") {
      let cnt = element.charCodeAt(0) - "A".charCodeAt(0);
      let upMoveCnt = cnt > 13 ? 26 - cnt : cnt;
      let lrMoveCnt = idx - preIdx > strLength / 2 ? 1 + preIdx : idx - preIdx;
      answer += upMoveCnt;
      answer += lrMoveCnt;
      preIdx = idx;
    }
  });

  return answer;
}

// 테스트
test.each([
  ["JEROEN", 56],
  ["JAN", 23],
  ["ABAAAAABAB", 8],
  ["ZZZ", 5],
  ["BBBAAAB", 8],
  ["BBBAAABB", 11],
])("그리드 - 조이스틱", (str, result) => {
  expect(solution(str)).toBe(result);
});
