/*
 * [프로그래머스 > 연습문제 > 피보나치 수]
 * [HISTORY]
 * 시도1. 재귀함수 -> 시간초과 -> n의 범위(2 <= n <= 100,000) 고려하여 재귀에서 변경
 * 시도2. 탑다운 방식(메모제이션) -> 실패 + 런타임에러
 * 코드참고. % 나누기를 for문 안에서 하는 것과 마지막에 하는 것의 차이점이 뭘까
 * => 엄청난 차이가 있었다
 * 오류원인: Fibo(44) = 2,971,215,073 인데 int형 범위를 벗어난다. (-+2,147,483,648)
 *          따라서, 44번째 이상부터는 이상한 수가 저장된다.
 * 해결방안: for문을 돌려서 1번 저장할때마다 1,234,567 의 나머지를 구하여 저장한다.
 *          전혀 다른 값이 나오는거 아닌가 의문이 드는데 위 방법은 모듈러 연산의 성질을 이용한 것이다.
 *          (A + B) % C = ((A % C) + (B % C)) % C
 *          따라서, 위 성질 때문에 매번 % 연산을 해도 원하는 정답을 맞출 수 있다.
 */
function solution(n) {
  let fiboArr = new Array(n + 1).fill(0);
  fiboArr[0] = 0;
  fiboArr[1] = 1;
  fiboArr[2] = 1;

  for (let i = 3; i <= n; i++) {
    fiboArr[i] = (fiboArr[i - 2] + fiboArr[i - 1]) % 1234567;
  }

  return fiboArr[n];
}

// 테스트
test.each([
  [3, 2],
  [5, 5],
])("연습문제 - 피보나치 수", (n, result) => {
  expect(solution(n)).toBe(result);
});