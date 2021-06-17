/*
 * [프로그래머스 > 연습문제 > 2016년]
 * [HISTORY]
 * 통과
 */
function solution(a, b) {
  let answer = "";
  const month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let day = 0;

  for (let i = 0; i < a - 1; i++) {
    day += month[i];
  }
  day += b;

  switch (day % 7) {
    case 1:
      answer = "FRI";
      break;
    case 2:
      answer = "SAT";
      break;
    case 3:
      answer = "SUN";
      break;
    case 4:
      answer = "MON";
      break;
    case 5:
      answer = "TUE";
      break;
    case 6:
      answer = "WED";
      break;
    case 0:
      answer = "THU";
      break;
  }

  return answer;
}

// 테스트
test.each([
  [5, 24, "TUE"],
  [7, 20, "WED"],
])("연습 - 2016년", (a, b, result) => {
  expect(solution(a, b)).toBe(result);
});
