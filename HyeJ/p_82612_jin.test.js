/*
 * [프로그래머스 > 위클리 챌린지 > 부족한 금액 계산하기]
 * [HISTORY]
 * 통과
 */
function solution(price, money, count) {
  let answer = -1;
  let total = 0;

  for (let i = 1; i <= count; i++) {
    total += price * i;
  }

  answer = total - money > 0 ? total - money : 0;

  return answer;
}

// 테스트
test.each([[3, 20, 4, 10]])(
  "연습 - 부족한 금액 계산하기",
  (p, m, c, result) => {
    expect(solution(p, m, c)).toBe(result);
  }
);
