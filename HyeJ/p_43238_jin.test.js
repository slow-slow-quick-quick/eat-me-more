/*
 * [프로그래머스 > 이분탐색 > 입국심사]
 * [HISTORY]
 * 오류 - 나누기를 parseInt와 함께 써야지 몫만 구할 수 있음
 * 통과
 * ㄴ 핵심: 제한 시간동안 각 부수에서 수용할 수 있는 사람의 수만 구하면 끝!
 */
function solution(n, times) {
  times.sort((a, b) => {
    return a - b;
  });
  let answer = times[times.length - 1] * n;
  answer = binarySearch(1, answer, times);

  function binarySearch(s, e, times) {
    let mid = Math.floor((s + e) / 2);
    if (s > e) {
      return answer;
    }
    if (isAllPassed(mid, times)) {
      answer = answer > mid ? mid : answer;
      return binarySearch(s, mid - 1, times);
    } else {
      return binarySearch(mid + 1, e, times);
    }
  }

  function isAllPassed(mid, times) {
    let total = 0;
    times.forEach((element) => {
      total += parseInt(mid / element);
    });
    if (total >= n) {
      return true;
    } else {
      return false;
    }
  }

  return answer;
}

// 테스트
test.each([[6, [7, 10], 28]])("이분탐색 - 입국심사", (n, times, result) => {
  expect(solution(n, times)).toBe(result);
});
