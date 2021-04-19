/*
 * [프로그래머스 > 그리드 > 큰 수 만들기]
 * [HISTORY]
 * 테스트 케이스 8, 9, 10 -> 시간초과
 * 테스트 케이스 9, 10 -> 시간초과
 * 반복문을 한번만 사용하여 구현중
 * 7752 -> 7758 로 변하는 과정 예외처리 못함
 * k값에 대해 잘못 파악
 */
function solution(number, k) {
  let answer = "";
  let numArr = number.split("");
  let numLength = number.length;
  let resK = numLength - k;

  if (numLength == resK) {
    return number;
  }

  for (let i = 0; i < numLength; i++) {
    if (answer.length == 0) {
      answer = numArr[i];
      continue;
    }

    if (resK - answer.length == numLength - i) {
      answer += numArr[i];
      continue;
    }

    // if (resK <= numLength - i) {
    let answerArr = answer.split("");
    for (let j = 0; j < answer.length; j++) {
      if (numArr[i] == answerArr[j]) {
        answer += numArr[i];
        break;
      }
      if (numArr[i] > answerArr[j]) {
        answer = answer.substring(0, j) + numArr[i];
        break;
      }
      //answer += numArr[i];
    }

    // answer.split("").forEach((e, idx) => {
    //   if (numArr[i] == e) {
    //     answer += numArr[i];
    //     numArr[i] = -1;
    //   } else if (numArr[i] > e) {
    //     answer = answer.substring(0, idx) + numArr[i];
    //     numArr[i] = -1;
    //   }
    // });
    // }
  }

  return answer;
}

// 테스트
test.each([
  ["1924", 2, "94"],
  ["1231234", 3, "3234"],
  ["4177252841", 4, "775841"],
  ["81", 1, "8"],
  ["17", 1, "7"],
])("그리드 - 큰 수 만들기", (number, k, result) => {
  expect(solution(number, k)).toBe(result);
});
