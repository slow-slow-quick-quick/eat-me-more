/*
 * [프로그래머스 - Skill Check LV.1 - test2]
 * 문제: 전화번호를 뒷 4자리 제외하고 마스킹 처리
 * 통과
 */
function solution(phone_number) {
  let total_len = phone_number.length;
  let mask_len = total_len - 4;

  let answer =
    phone_number.substring(0, mask_len).replace(/[0-9]/g, "*") +
    phone_number.substring(mask_len, total_len + 1);

  return answer;
}

// 테스트
test.each([
  ["01033334444", "*******4444"],
  ["027778888", "*****8888"],
])("Level1 - 2번 문제", (phone_number, result) => {
  expect(solution(phone_number)).toBe(result);
});
