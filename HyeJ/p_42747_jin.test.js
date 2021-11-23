/*
 * [프로그래머스 > 정렬 > H-Index]
 * [HISTORY]
 * 실패있음
 */
function solution(citations) {
  let answer = 0;
  let len = citations.length;
  citations.sort((a, b) => {
    return a - b;
  });

  citations.forEach((h, i) => {
    if (h <= len - i && h >= i) {
      answer = h;
    }
  });

  return answer;
}

// 테스트
test.each([[[3, 0, 6, 1, 5], 3]])("정렬 - H-Index", (arr, result) => {
  expect(solution(arr)).toBe(result);
});
