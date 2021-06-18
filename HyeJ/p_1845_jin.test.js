/*
 * [프로그래머스 > 연습문제 > 폰켓몬]
 * [HISTORY]
 * 통과
 */
function solution(nums) {
  let answer = 1;

  nums.sort();
  let preNum = nums[0];

  nums.forEach((e) => {
    if (preNum != e) {
      answer++;
    }
    preNum = e;
  });

  return answer > nums.length / 2 ? nums.length / 2 : answer;
}

// 테스트
test.each([
  [[3, 1, 2, 3], 2],
  [[3, 3, 3, 2, 2, 4], 3],
  [[3, 3, 3, 2, 2, 2], 2],
])("연습 - 폰켓몬", (nums, result) => {
  expect(solution(nums)).toBe(result);
});
