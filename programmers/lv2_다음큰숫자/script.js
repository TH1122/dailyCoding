function solution(n) {
  let check = (num) => {
    let count = 0;
    let str_2 = num.toString(2);
    for (let m = 0; m < str_2.length; m++) {
      str_2[m] === "1" ? count++ : null;
    }
    return count;
  };
  let target = check(n);
  let res = 0;
  for (let i = n + 1; i <= 1000000; i++) {
    if (target === check(i)) {
      res = i;
      break;
    }
  }
  return res;
}
