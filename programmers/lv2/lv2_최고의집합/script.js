function solution(n, s) {
  let res = [-1];
  let num = Math.floor(s / n);
  if (num >= 1) {
    res = Array.from({ length: n }, () => num);
    let sum = res.reduce((acc, cur) => acc + cur, 0);
    let diff = s - sum;
    for (let i = 1; i <= diff; i++) {
      res[n - i]++;
    }
  }
  return res;
}
