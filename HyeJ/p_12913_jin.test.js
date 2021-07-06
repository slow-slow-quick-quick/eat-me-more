/*
 * [프로그래머스 > 연습문제 > 땅따먹기]
 * [HISTORY]
 * 문제 잘못 이해 -> 한 행에 같은 수가 여러개 존재할 수 있음
 */
function solution(land) {
  let max_num = Math.max(
    land[0][0],
    Math.max(land[0][1], Math.max(land[0][2], land[0][3]))
  );
  let pre_idx = land[0].indexOf(max_num);
  let answer = max_num;

  for (let i = 1; i < land.length; i++) {
    let idx = [0, 1, 2, 3].filter((e) => {
      return e !== pre_idx;
    });

    max_num = Math.max(
      land[i][idx[0]],
      Math.max(land[i][idx[1]], land[i][idx[2]])
    );
    pre_idx = land[i].indexOf(max_num);
    answer += max_num;
  }

  return answer;
}

// 테스트
test.each([
  [
    [
      [1, 2, 3, 5],
      [5, 6, 7, 8],
      [4, 3, 2, 1],
    ],
    16,
  ],
  [
    [
      [4, 3, 2, 1],
      [2, 2, 2, 1],
      [6, 6, 6, 4],
      [8, 7, 6, 5],
    ],
    20,
  ],
])("연습 - 땅따먹기", (land, result) => {
  expect(solution(land)).toBe(result);
});
