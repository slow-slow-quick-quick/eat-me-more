/*
 * [프로그래머스 > Summer/Winter Coding(~2018) > 소수 만들기]
 * [HISTORY]
 * 통과
 */
function solution(nums) {
  let answer = 0;
  let l = nums.length;

  function primeNum(n) {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return true;
      }
    }
    return false;
  }

  for (let i = 0; i < l; i++) {
    let e1 = nums[i];
    for (let j = i + 1; j < l; j++) {
      let e2 = nums[j];
      for (let k = j + 1; k < l; k++) {
        let e3 = nums[k];
        if (!primeNum(e1 + e2 + e3)) {
          answer++;
        }
      }
    }
  }
  return answer;
}

// 테스트
test.each([
  [[1, 2, 3, 4], 1],
  [[1, 2, 7, 6, 4], 4],
])("Summer/Winter Coding(~2018) - 소수 만들기", (nums, result) => {
  expect(solution(nums)).toBe(result);
});
