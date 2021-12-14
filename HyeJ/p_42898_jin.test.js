/*
 * [프로그래머스 > 동적계획법 > 등굣길]
 * [HISTORY]
 * 사방에 웅덩이가 있는 경우 고려하지 않음
 * java로 다시 구현
 */
function solution(m, n, puddles) {
  let answer = 0;
  let dp = Array.from(Array(n + 1), () => Array(m + 1).fill(0));

  puddles.forEach((e) => {
    dp[e[0]][e[1]] = -1;
  });

  for (let i = 1; i <= n; i++) {
    // 행
    for (let j = 1; j <= m; j++) {
      // 열
      if (dp[i][j] === -1) {
        continue;
      }
      if (i === 1 && j === 1) {
        dp[i][j] = 0;
      } else if (i === 1 && j !== 1) {
        dp[i][j] = dp[i][j - 1] + 1;
      } else if (i !== 1 && j === 1) {
        dp[i][j] = dp[i - 1][j] + 1;
      } else {
        if (dp[i - 1][j] === -1) {
          dp[i][j] = dp[i][j - 1] + 1;
        } else if (dp[i][j - 1] === -1) {
          dp[i][j] = dp[i - 1][j] + 1;
        } else {
          dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + 1;
        }
      }
    }
  }

  answer = (dp[n][m] - 1) % 1000000007;
  return answer;
}

// 테스트
test.each([[4, 3, [[2, 2]], 4]])(
  "동적계획법 - 등굣길",
  (m, n, puddles, result) => {
    expect(solution(m, n, puddles)).toBe(result);
  }
);
