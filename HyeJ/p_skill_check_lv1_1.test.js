/*
 * [프로그래머스 - Skill Check LV.1 - test1]
 * 문제: 주어진 문자열을 한 자리수씩 더하기
 * 통과
 */
function solution(nums) {
  let answer = 0;
  String(nums)
    .split("")
    .forEach((e) => {
      answer += +e;
    });

  return answer;
}

// 테스트
test.each([
  [123, 6],
  [987, 24],
])("Level1 - 1번 문제", (nums, result) => {
  expect(solution(nums)).toBe(result);
});
