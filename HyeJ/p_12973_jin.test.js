/*
 * [프로그래머스 > 2017 팁스타운 > 짝지어 제거하기]
 * [HISTORY]
 * 실패 - 시간초과 (정규식 사용)
 */
function solution(s) {
  let answer = -1;

  if (s.length % 2 !== 0) return 0;

  while (
    s.match(
      /aa|bb|cc|dd|ee|ff|gg|hh|ii|jj|kk|ll|mm|nn|oo|pp|qq|rr|ss|tt|uu|vv|ww|xx|yy|zz/
    )
  ) {
    s = s.replace(
      /aa|bb|cc|dd|ee|ff|gg|hh|ii|jj|kk|ll|mm|nn|oo|pp|qq|rr|ss|tt|uu|vv|ww|xx|yy|zz/,
      ""
    );
  }

  return s === "" ? 1 : 0;
}

// 테스트
test.each([
  ["baabaa", 1],
  ["cdcd", 0],
])("2017 팀스타운 - 짝지어 제거하기", (s, result) => {
  expect(solution(s)).toBe(result);
});
