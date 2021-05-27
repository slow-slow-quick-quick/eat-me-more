/*
 * [프로그래머스 > 2020 카카오 인턴십 > 키패드 누르기]
 * [HISTORY]
 * 실패: 8번, 15번 -> 왼쪽, 오른쪽 초기화 필요
 * 통과 (로직 좀더 보완)
 */
function solution(numbers, hand) {
  let answer = "";
  /* 이전에 눌렀던 숫자 */
  let lNum = -1;
  let rNum = -1;
  /* 현재 위치 */
  let lLocation = 3;
  let rLocation = 3;
  let cLocation = 0;
  /* 위치별 숫자 배열 */
  const lNumbers = [1, 4, 7];
  const rNumbers = [3, 6, 9];
  const cNumberse = [2, 5, 8, 0];

  numbers.forEach((e) => {
    if (e === 1 || e === 4 || e === 7) {
      lLocation = lNumbers.findIndex((el) => e === el);
      lNum = e;
      answer += "L";
    } else if (e === 3 || e === 6 || e === 9) {
      rLocation = rNumbers.findIndex((er) => e === er);
      rNum = e;
      answer += "R";
    } else {
      cLocation = cNumberse.findIndex((ec) => e === ec);

      let lDist = Math.abs(lLocation - cLocation);
      let rDist = Math.abs(rLocation - cLocation);

      /* '왼쪽->중앙' 또는 '오른쪽->중앙'인 경우 거리가 1추가 */
      if (lNum === 1 || lNum === 4 || lNum === 7 || lNum === -1) {
        lDist += 1;
      }

      if (rNum === 3 || rNum === 6 || rNum === 9 || rNum === -1) {
        rDist += 1;
      }

      if (lDist < rDist) {
        lLocation = cNumberse.findIndex((ec) => e === ec);
        lNum = e;
        answer += "L";
      } else if (lDist > rDist) {
        rLocation = cNumberse.findIndex((ec) => e === ec);
        rNum = e;
        answer += "R";
      } else {
        if (hand === "left") {
          lLocation = cNumberse.findIndex((ec) => e === ec);
          lNum = e;
          answer += "L";
        } else {
          rLocation = cNumberse.findIndex((ec) => e === ec);
          rNum = e;
          answer += "R";
        }
      }
    }
  });

  return answer;
}

// 테스트
test.each([
  [[1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right", "LRLLLRLLRRL"],
  [[7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left", "LRLLRRLLLRR"],
  [[1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "right", "LLRLLRLLRL"],
])("연습 - 키패드 누르기", (numbers, hand, result) => {
  expect(solution(numbers, hand)).toBe(result);
});
