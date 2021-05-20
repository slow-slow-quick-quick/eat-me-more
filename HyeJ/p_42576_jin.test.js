/*
 * [프로그래머스 > 완주하지 못한 선수]
 * [HISTORY]
 * 동명이인 예외처리 필요
 * 효율성 시간초과
 */
function solution(participant, completion) {
  let answer = "";

  completion.forEach((element) => {
    let idx = participant.indexOf(element);
    if (idx !== -1) {
      participant.splice(idx, 1);
    }
  });

  answer = participant[0];

  return answer;
}

// 테스트
test.each([
  [["leo", "kiki", "eden"], ["eden", "kiki"], "leo"],
  [
    ["marina", "josipa", "nikola", "vinko", "filipa"],
    ["josipa", "filipa", "marina", "nikola"],
    "vinko",
  ],
])("프로그래머스 - 완주하지 못한 선수", (participant, completion, result) => {
  expect(solution(participant, completion)).toBe(result);
});
