/*
 * [프로그래머스 > 그리드 > 큰 수 만들기]
 * [HISTORY]
 * 테스트 케이스 8, 9, 10 -> 시간초과
 * 테스트 케이스 9, 10 -> 시간초과
 * 반복문을 한번만 사용하여 구현중
 * 7752 -> 7758 로 변하는 과정 예외처리 못함
 * k값에 대해 잘못 파악
 * ------ 방식 수정 ------
 * 선택해야하는 개수만큼 뒤에서부터 자리수를 채운 후, 앞으로 오면서 max값 선정
 * => 테스트 케이스 10 시간초과
 * 뒤에서 앞이 아닌, 앞에서 뒤로 가면서 max값 선정
 * => 9가 나올경우 더이상 반복하지 않아도 되기 때문에 시간절약
 * => 뒤에서 부터 검사할땐 앞에 더 큰 수가 있을 수 있기 때문에 불가했음
 * 통과
 */
function solution(number, k) {
  let answer = "";
  let numArr = number.split("");
  let l = 0;
  let startIdx = 0;

  for (let i = k; i < number.length; i++) {
    let maxNum = -1;
    startIdx = i;
    for (let j = l; j <= i; j++) {
      if (maxNum < numArr[j]) {
        maxNum = numArr[j];
        startIdx = j;
        if (maxNum === "9") break;
      }
    }
    l = startIdx + 1;
    answer += maxNum;
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
