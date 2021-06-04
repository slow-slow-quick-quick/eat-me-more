/*
 * [프로그래머스 > 월간 코드 첼린지 시즌2 > 약수의 개수와 덧셈]
 * [HISTORY]
 * 제곱근의 정수면 홀수, 아니면 짝수!!
 * 통과
 */
function solution(left, right) {
  let answer = 0;

  let divisorCnt = (num) => {
    let cnt = 0;
    for (let i = 1; i <= num / 2; i++) {
      if (num % i === 0) {
        cnt += 2;
      }
    }
    if (Number.isInteger(Math.sqrt(num))) {
      cnt -= 1;
    }
    return cnt;
  };

  for (let i = left; i <= right; i++) {
    answer = divisorCnt(i) % 2 === 0 ? answer + i : answer - i;
  }

  return answer;
}

// 테스트
test.each([
  [13, 17, 43],
  [24, 27, 52],
])("연습 - 약수의 개수와 덧셈", (left, right, result) => {
  expect(solution(left, right)).toBe(result);
});
