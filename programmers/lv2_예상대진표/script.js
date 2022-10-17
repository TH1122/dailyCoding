function solution(n, a, b) {
  let max = Math.max(a, b);
  let min = Math.min(a, b);
  let result = 1;
  while (n >= 2) {
    if (max % 2 === 0 && max === min + 1) break;
    else {
      result++;
      max = Math.ceil(max / 2);
      min = Math.ceil(min / 2);
    }
  }
  return result;
}
