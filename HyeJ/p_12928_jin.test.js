/*
 * [프로그래머스 > 약수의 합]
 * [HISTORY]
 * 통과
 */
function solution(n) {
  let answer = 0;

  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      let mod = n / i;
      if (i === mod) answer += i;
      else answer += i + mod;
    }
  }

  return answer;
}

// 테스트
test.each([
  [12, 28],
  [5, 6],
  [0, 0],
  [1, 1],
  [2, 3],
  [3, 4],
  [4, 7],
])("연습 - 약수의 합", (n, result) => {
  expect(solution(n)).toBe(result);
});
