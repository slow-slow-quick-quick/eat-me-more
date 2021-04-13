/*
 * [프로그래머스 > 그리드 > 큰 수 만들기]
 * [HISTORY]
 * 테스트 케이스 8, 9, 10 -> 시간초과
 * 테스트 케이스 9, 10 -> 시간초과
 * 반복문을 한번만 사용하여 구현중
 */
function solution(number, k) {
  let answer = "";
  let maxNum = 1;

  if (number.length == k) {
    return number;
  }

  number.split("").forEach((element, idx) => {
    if (number.length - idx < k) {
      // 남은 인덱스 갯수가 구해야 하는 자리수보다 적게 남아서 max 값을 첫번째 자리로 변경하지 못하는 경우
      let preNum = answer.split("")[k - 1];
      return preNum > element ? answer : answer.substring(0, k - 1) + preNum;
    }

    if (element > maxNum) {
      maxNum = element;
      answer = maxNum;
    } else {
      if (answer.length < k) {
        preNum = answer.split("")[answer.length - 1];
        if (preNum < element) {
          answer = answer.substring(0, answer.length - 1) + preNum;
        } else {
          answer = answer + element;
        }
      }
    }
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
