/*
 * [프로그래머스 > 이분탐색 > 징검다리]
 * [HISTORY]
 * 핵심: 바위 사이의 gap을 mid 값으로 정하기!! (0 ~ distance)
 */
function solution(distance, rocks, n) {
  let answer = 0;
  rocks.sort((a, b) => {
    return a - b;
  });
  let start = 0;
  let end = distance;
  let rocksNum = rocks.length;
  binarySearch(start, end, rocks);

  function binarySearch(s, e, rocks) {
    let mid = Math.floor((s + e) / 2);
    let value = 0;
    let total = 0;
    let gapArr = [];

    if (s > e) {
      return false;
    }
    for (let i = 0; i < rocksNum; i++) {
      if (rocks[i] >= value + mid) {
        gapArr.push(rocks[i] - value);
        value = rocks[i];
        total++;
      }
    }
    if (total >= rocksNum - n) {
      answer = gapArr.sort((a, b) => {
        return a - b;
      })[0];
      return binarySearch(mid + 1, e, rocks);
    } else {
      return binarySearch(s, mid - 1, rocks);
    }
  }

  return answer;
}

// 테스트
test.each([[25, [2, 14, 11, 21, 17], 2, 4]])(
  "이분탐색 - 징검다리",
  (distance, rocks, n, result) => {
    expect(solution(distance, rocks, n)).toBe(result);
  }
);
