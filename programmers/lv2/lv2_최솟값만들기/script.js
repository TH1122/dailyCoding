function solution(A, B) {
  let sum = 0;
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);
  while (B.length) {
    let a = A.shift();
    let b = B.shift();
    sum += a * b;
  }
  return sum;
}
