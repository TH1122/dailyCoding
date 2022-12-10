function solution(a, b, n) {
  let res = 0;
  while (n >= a) {
    let base = Math.floor(n / a);
    let put = base * a;
    let get = base * b;
    res += get;
    n = n - put + get;
  }
  return res;
}
