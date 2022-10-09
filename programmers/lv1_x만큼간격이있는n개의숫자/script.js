function solution(x, n) {
  let answer = Array(n);
  let index = 0;
  for (let i = x; index < n; i += x) {
    answer[index] = i;
    index++;
  }
  return answer;
}
