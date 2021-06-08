/*
 * [프로그래머스 > 연습문제 > 소수찾기]
 * [HISTORY]
 * 테스트10~12, 효율성 시간초과
 * 에라토스테네스의 체 사용해보기
 */
function solution(n) {
  var answer = 0;

  if (n === 2) return 1;

  var nArr = [];
  for (let i = 2; i <= n; i++) {
    nArr.push(i);
  }

  for (let i = 0; i < nArr.length; i++) {
    let tmp = nArr[i];
    for (let j = 2; j < tmp; j++) {
      if (tmp % j === 0) {
        nArr = nArr.filter(function (n) {
          return n % tmp !== 0;
        });
      }
    }
  }

  answer = nArr.length;

  return answer;
}

// 테스트
test.each([
  [10, 4],
  [2, 1],
  [3, 2],
  [5, 3],
])("연습 - 소수찾기", (n, result) => {
  expect(solution(n)).toBe(result);
});
