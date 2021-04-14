/*
 * [프로그래머스 > 그리드 > 큰 수 만들기]
 * [HISTORY]
 * 테스트 케이스 8, 9, 10 -> 시간초과
 * 테스트 케이스 9, 10 -> 시간초과
 * 반복문을 한번만 사용하여 구현중
 * 7752 -> 7758 로 변하는 과정 예외처리 못함
 */
function solution(number, k) {
  let answer = "";
  let maxNum = 1;
  let preNum = number.split("")[0];
  let numLength = number.length;

  if (numLength == k) {
    return number;
  }

  number.split("").forEach((element, idx) => {
    if (k - answer.length == numLength - idx) {
      answer += element;
    } else {
      if (preNum <= element) {
        // 작은 경우는 없음, 이미 위에서 걸러짐
        if (maxNum < element && numLength - idx - 1 >= k) {
          maxNum = element;
          answer = maxNum;
        } else if (maxNum == element) {
          answer += element;
        } else {
          answer = answer.substring(0, answer.length - 1) + element;
        }
      } else {
        if (answer.length < k) {
          answer += element;
        }
      }
    }
    //console.log(answer);
    preNum = answer.split("")[answer.length - 1];
  });

  return answer;
}

// 테스트
test.each([
  ["1924", 2, "94"],
  ["1231234", 3, "334"],
  ["4177252841", 4, "7784"],
  ["81", 1, "8"],
  ["17", 2, "17"],
])("그리드 - 큰 수 만들기", (number, k, result) => {
  expect(solution(number, k)).toBe(result);
});
