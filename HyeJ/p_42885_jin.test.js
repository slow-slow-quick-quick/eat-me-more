/*
 * [프로그래머스 > 그리드 > 구명보트]
 * [HISTORY]
 * 통과
 */
function solution(people, limit) {
  let answer = 0;
  let LCursor = 0;
  let RCursor = people.length - 1;

  people.sort(function (a, b) {
    return b - a;
  });

  while (LCursor < RCursor) {
    if (people[LCursor] + people[RCursor] <= limit) {
      RCursor--;
    }
    LCursor++;
    answer++;
  }
  if (LCursor == RCursor) {
    answer++;
  }

  return answer;
}

// 테스트
test.each([
  [[70, 50, 80, 50], 100, 3],
  [[70, 80, 50], 100, 3],
])("그리드 - 구명보트", (people, limit, result) => {
  expect(solution(people, limit)).toBe(result);
});
