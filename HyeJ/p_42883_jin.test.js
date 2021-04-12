/*
 * [프로그래머스 > 그리드 > 큰 수 만들기]
 * [HISTORY]
 * 테스트 케이스 8, 9, 10 -> 시간초과
 * 테스트 케이스 9, 10 -> 시간초과
 */
function solution(number, k) {
  let answer = "";
  let tmpArr = [];
  let cnt = 0;

  number.split("").forEach((element) => {
    if (tmpArr.length > 0) {
      for (let i = tmpArr.length; i > -1; i--) {
        if (tmpArr[i] > element) {
          break;
        }
        if (tmpArr[i] < element && k > 0) {
          tmpArr.pop();
          k--;
        }
      }
    }
    if (cnt < number.length - k) {
      tmpArr.push(element);
      cnt++;
    }
  });

  tmpArr.forEach((element) => {
    answer += element;
  });

  return answer;
}

// 테스트
test.each([
  ["1924", 2, "94"],
  ["1231234", 3, "3234"],
  ["4177252841", 4, "775841"],
  ["81", 1, "8"],
])("그리드 - 큰 수 만들기", (number, k, result) => {
  expect(solution(number, k)).toBe(result);
});
