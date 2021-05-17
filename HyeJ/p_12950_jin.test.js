/*
 * [프로그래머스 > 연습문제 > 행렬의 덧셈]
 * [HISTORY]
 * 통과
 */
function solution(arr1, arr2) {
  // 정답 배열 초기화
  var answer = Array.from(Array(arr1.length), () => new Array(arr1[0].length));

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[0].length; j++) {
      answer[i][j] = arr1[i][j] + arr2[i][j];
    }
  }
  return answer;
}

// 테스트
test.each([
  [
    [
      [1, 2],
      [2, 3],
    ],
    [
      [3, 4],
      [5, 6],
    ],
    [
      [4, 6],
      [7, 9],
    ],
  ],
  [
    [[1], [2]],
    [[3], [4]],
    [[4], [6]],
  ],
])("연습 - 행렬의 덧셈", (arr1, arr2, result) => {
  expect(solution(arr1, arr2)).toEqual(result);
});
