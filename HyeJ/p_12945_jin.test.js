/*
 * [프로그래머스 > 연습문제 > 피보나치 수]
 * [HISTORY]
 * 재귀함수 -> 시간초과 -> n의 범위(2 <= n <= 100,000) 고려하여 재귀에서 변경
 * 탑다운 방식(메모제이션) -> 실패 + 런타임에러
 */
function solution(n) {
  let answer = 0;
  let fiboArr = new Array(100000).fill(0);

  answer = fibo(n);

  function fibo(n) {
    if (n === 1 || n === 2) {
      fiboArr[n - 1] = 1;
      return 1;
    }
    if (fiboArr[n - 1] != 0) {
      return fiboArr[n - 1];
    }
    fiboArr[n - 1] = fibo(n - 2) + fibo(n - 1);
    return fiboArr[n - 1];
  }

  return answer % 1234567;
}

// 테스트
test.each([
  [3, 2],
  [5, 5],
])("연습문제 - 피보나치 수", (n, result) => {
  expect(solution(n)).toBe(result);
});
