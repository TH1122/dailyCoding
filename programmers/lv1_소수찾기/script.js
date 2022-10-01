function solution(n) {
  const check = (num) => {
    if (num === 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };
  let res = 0;
  for (let k = 2; k <= n; k++) {
    check(k) ? res++ : null;
  }
  return res;
}
