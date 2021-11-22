/*
 * [프로그래머스 > 위클리 챌린지 > 최소직사각형]
 * [HISTORY]
 * 통과
 */
function solution(sizes) {
  let answer = 0;
  let lenArr = [];

  sizes.forEach((element) => {
    lenArr.push(element[0]);
    lenArr.push(element[1]);
  });

  lenArr.sort((a, b) => {
    return b - a;
  });
  let max1 = lenArr[0];
  let max2 = lenArr[1];

  for (let i = 2; i < lenArr.length; i++) {
    let flag = true;
    let newMax = lenArr[i];
    sizes.forEach((arr) => {
      if (
        (arr[0] > max1 || arr[1] > newMax) &&
        (arr[1] > max1 || arr[0] > newMax)
      ) {
        flag = false;
      }
    });
    if (!flag) {
      max2 = lenArr[i - 1];
      break;
    }
    max2 = newMax;
  }

  answer = max1 * max2;

  return answer;
}

// 테스트
test.each([
  [
    [
      [60, 50],
      [30, 70],
      [60, 30],
      [80, 40],
    ],
    4000,
  ],
  [
    [
      [10, 7],
      [12, 3],
      [8, 15],
      [14, 7],
      [5, 15],
    ],
    120,
  ],
  [
    [
      [14, 4],
      [19, 6],
      [6, 16],
      [18, 7],
      [7, 11],
    ],
    133,
  ],
])("연습 -최소직사각형", (sizes, result) => {
  expect(solution(sizes)).toBe(result);
});
