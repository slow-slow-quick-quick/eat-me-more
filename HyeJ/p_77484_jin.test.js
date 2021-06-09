/*
 * [프로그래머스 > 2021 Dev-Matching > 로또 최고 순위와 최저 순위]
 * [HISTORY]
 *
 */
function solution(lottos, win_nums) {
  let answer = [];
  let cnt = 0;
  let zero = 0;

  let nums = (num) => {
    if (num >= 2) return 7 - num;
    else return 6;
  };

  lottos.forEach((e) => {
    if (win_nums.includes(e)) cnt++;
    if (e === 0) zero++;
  });

  answer.push(nums(cnt + zero));
  answer.push(nums(cnt));

  return answer;
}

// 테스트
test.each([
  [
    [44, 1, 0, 0, 31, 25],
    [31, 10, 45, 1, 6, 19],
    [3, 5],
  ],
  [
    [0, 0, 0, 0, 0, 0],
    [38, 19, 20, 40, 15, 25],
    [1, 6],
  ],
  [
    [45, 4, 35, 20, 3, 9],
    [20, 9, 3, 45, 4, 35],
    [1, 1],
  ],
])("연습 - 로또 최고 순위와 최저 순위", (lottos, win_nums, result) => {
  expect(solution(lottos, win_nums)).toEqual(result);
});
