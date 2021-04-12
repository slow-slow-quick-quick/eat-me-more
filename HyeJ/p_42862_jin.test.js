/*
 * [프로그래머스 > 그리드 > 체육복]
 * [HISTORY]
 * 테스트 12번 실패 -> 성공
 * 테스트 7번 실패 -> 성공
 */
function solution(n, lost, reserve) {
  let lostTmp = [];
  let lostCopy = [];
  var lostNum = lost.length;

  lost.forEach((element) => {
    lostCopy.push(element);
  });

  lost.forEach((element) => {
    if (reserve.includes(element)) {
      reserve.splice(reserve.indexOf(element), 1);
      lostCopy.splice(lostCopy.indexOf(element), 1);
      lostNum--;
    }
  });

  lostCopy.forEach((element) => {
    if (reserve.includes(element + 1) && reserve.includes(element - 1)) {
      lostTmp.push(element);
    } else if (
      reserve.includes(element + 1) &&
      !reserve.includes(element - 1)
    ) {
      reserve.splice(reserve.indexOf(element + 1), 1);
      lostNum--;
    } else if (
      !reserve.includes(element + 1) &&
      reserve.includes(element - 1)
    ) {
      reserve.splice(reserve.indexOf(element - 1), 1);
      lostNum--;
    }
  });

  lostTmp.forEach((element) => {
    if (reserve.includes(element + 1)) {
      reserve.splice(reserve.indexOf(element + 1), 1);
      lostNum--;
    } else if (reserve.includes(element - 1)) {
      reserve.splice(reserve.indexOf(element - 1), 1);
      lostNum--;
    }
  });

  var answer = n - lostNum;
  return answer;
}

// 테스트
test.each([
  [5, [2, 4], [1, 3, 5], 5],
  [5, [2, 4], [3], 4],
  [3, [3], [1], 2],
  [3, [1, 2], [2, 3], 2],
  [3, [3, 2], [2, 1], 3],
])("그리드 - 체육복", (n, lost, reserve, result) => {
  expect(solution(n, lost, reserve)).toBe(result);
});
