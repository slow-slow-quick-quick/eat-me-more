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
 */
function solution(number, k) {
  let answer = "";
  let numArr = number.split("");
  let maxNum = -1;
  let l = -1;
  let newidx = 0;

  for (let i = k; i < number.length; i++) {
    newidx = i;
    maxNum = numArr[i];
    for (let j = i - 1; j > l; j--) {
      if (maxNum <= numArr[j]) {
        maxNum = numArr[j];
        newidx = j;
      }
    }
    l = newidx;
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
