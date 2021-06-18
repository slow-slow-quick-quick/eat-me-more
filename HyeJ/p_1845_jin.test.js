/*
 * [프로그래머스 > 찾아라 프로그래밍 마에스터 > 폰켓몬]
 * [HISTORY]
 * 통과
 */
function solution(nums) {
  let answer = 1;

  nums.sort();
  let preNum = nums[0];

  // 종류 개수를 카운트하는 반복문을 Set 함수를 이용하여 구할 수 있음
  // const numArr = new Set(nums);
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
])("찾아라 프로그래밍 마에스터 - 폰켓몬", (nums, result) => {
  expect(solution(nums)).toBe(result);
});
