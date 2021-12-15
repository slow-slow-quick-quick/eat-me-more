/*
 * [프로그래머스 > 연습문제 > 피보나치 수]
 * [HISTORY]
 * 시간초과 -> n의 범위(2 <= n <= 100,000) 고려하여 재귀에서 변경
 */
function solution(n) {
  let answer = 0;
  answer = fibo(n);

  function fibo(n) {
    if (n === 1 || n === 2) {
      return 1;
    }
    return fibo(n - 1) + fibo(n - 2);
  }

  return answer % 1234567;
}

// 테스트
test.each([
  [3, 2],
  [5, 5],
])("연습문제 - 피보나치 수", (n, result) => {
  expect(solution(n)).toEqual(result);
});
