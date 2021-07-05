/*
 * [프로그래머스 > Summer/Winter Coding(~2018) > 영어 끝말잇기]
 * [HISTORY]
 * 리턴값 구하는 함수 보완
 * 통과
 */
function solution(n, words) {
  let answer = [];
  let last_char = words[0].substring(words[0].length - 1);
  let word_set = new Set();
  word_set.add(words[0]);
  let size = word_set.size;

  function returnInfo(i) {
    let r1 = (i + 1) % n === 0 ? n : (i + 1) % n;
    let r2 = (i + 1) % n === 0 ? (i + 1) / n : parseInt((i + 1) / n) + 1;
    answer.push(r1);
    answer.push(r2);
    return answer;
  }

  for (let i = 1; i < words.length; i++) {
    word_set.add(words[i]);
    if (word_set.size === size) {
      answer = returnInfo(i);
      return answer;
    }
    if (words[i].substring(0, 1) !== last_char) {
      answer = returnInfo(i);
      return answer;
    }
    size = word_set.size;
    last_char = words[i].substring(words[i].length - 1);
  }

  return [0, 0];
}

// 테스트
test.each([
  [
    3,
    [
      "tank",
      "kick",
      "know",
      "wheel",
      "land",
      "dream",
      "mother",
      "robot",
      "tank",
    ],
    [3, 3],
  ],
  [
    5,
    [
      "hello",
      "observe",
      "effect",
      "take",
      "either",
      "recognize",
      "encourage",
      "ensure",
      "establish",
      "hang",
      "gather",
      "refer",
      "reference",
      "estimate",
      "executive",
    ],
    [0, 0],
  ],
  [2, ["hello", "one", "even", "never", "now", "world", "draw"], [1, 3]],
])("연습 - 영어 끝말잇기", (n, words, result) => {
  expect(solution(n, words)).toEqual(result);
});
