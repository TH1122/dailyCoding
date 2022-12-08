function solution(n) {
  let obj = { 0: 0n, 1: 1n };
  for (let i = 2; i <= n; i++) {
    obj[i] = obj[i - 2] + obj[i - 1];
  }
  return obj[n] % 1234567n;
}
