/*
 * [프로그래머스 > 연습문제 > 최대공약수와 최소공배수]
 * [HISTORY]
 * 통과
 */
function solution(n, m) {
  let answer = [];
  let gcd = 0;
  let lcm = 0;

  function GCD(a, b) {
    if (b === 0) {
      return a;
    } else {
      return GCD(b, a % b);
    }
  }

  function LCM(a, b) {
    return (a * b) / gcd;
  }

  if (n > m) {
    gcd = GCD(n, m);
  } else {
    gcd = GCD(m, n);
  }
  lcm = LCM(n, m);

  answer.push(gcd);
  answer.push(lcm);

  return answer;
}

// 테스트
test.each([
  [3, 12, [3, 12]],
  [2, 5, [1, 10]],
])("연습 - 최대공약수와 최소공배수", (n, m, result) => {
  expect(solution(n, m)).toEqual(result);
});
