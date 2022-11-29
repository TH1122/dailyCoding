function solution(n, left, right) {
  let arr = [];
  for (let i = left; i <= right; i++) {
    let a = Math.floor(i / n);
    let b = i % n;
    arr.push(Math.max(a, b) + 1);
  }
  return arr;
}
