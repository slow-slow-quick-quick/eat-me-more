/*
 * [프로그래머스 > 완주하지 못한 선수]
 * [HISTORY]
 * 동명이인 예외처리 필요
 * 효율성 시간초과
 * 통과
 */
function solution(participant, completion) {
  let answer = "";
  let flag = true;

  participant.sort();
  completion.sort();

  for (let i = 0; i < completion.length; i++) {
    if (participant[i] !== completion[i]) {
      flag = false;
      answer = participant[i];
      return answer;
    }
  }

  if (flag) {
    answer = participant.pop();
  }

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
  [
    ["mislav", "stanko", "mislav", "ana"],
    ["stanko", "ana", "mislav"],
    "mislav",
  ],
])("프로그래머스 - 완주하지 못한 선수", (participant, completion, result) => {
  expect(solution(participant, completion)).toBe(result);
});
