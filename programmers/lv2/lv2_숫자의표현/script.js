function solution(n) {
  let count = 1;
  for (let i = 2; i <= Math.ceil(n / 2); i++) {
    let idx = i;
    let sum = 0;
    while (idx > 0) {
      sum += idx;
      if (sum === n) {
        count++;
        break;
      }
      if (sum > n) {
        break;
      }
      idx--;
    }
  }
  return count;
}
