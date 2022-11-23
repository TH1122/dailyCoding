function solution(k, m, score) {
  let res = 0;
  score.sort((a, b) => b - a);
  for (let i = m - 1; i < score.length; i += m) {
    res += score[i] * m;
  }
  return res;
}
