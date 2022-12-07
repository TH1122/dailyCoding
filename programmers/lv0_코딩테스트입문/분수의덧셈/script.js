function solution(denum1, num1, denum2, num2) {
  let num = num1 * num2;
  let denum = denum1 * num2 + denum2 * num1;
  for (let i = 2; i <= num; i++) {
    if (denum % i === 0 && num % i === 0) {
      denum /= i;
      num /= i;
      i = 1;
    }
  }
  return [denum, num];
}
