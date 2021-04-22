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
    // 1. 아직 아무것도 선택하지 않았을 경우
    if (answer.length == 0) {
      answer = numArr[i];
      continue;
    }

    // 2. 남은 정답 갯수와 정답으로 선택 가능한 갯수가 동일한 경우
    if (resK - answer.length == numLength - i) {
      answer += numArr[i];
      continue;
    }

    // 3. 정답 자리수보다 선택 가능한 갯수가 많거나 동일한 경우 -> 아얘 맨 앞자리를 교체
    if (resK <= numLength - i) {
      let answerArr = answer.split("");
      let j = answer.length - 1;

      while (answerArr[j] > numArr[i]) {
        j--;
      }

      if (j == answer.length - 1) {
        answer += numArr[i];
      } else {
        answer = answer.substring(0, j) + numArr[i];
      }
    }

    // // 4. 그 외의 경우, 정답 끝에서부터 현재 선택한 숫자와 교체할지 그냥 이어 붙일지 체크
    // let answerArr = answer.split("");
    // for(let j = answer.length-1; j > -1; j++) {
    //   if(answerArr[j] < numArr[i]) {

    //   } else {
    //     answer += numArr[i];
    //   }
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
