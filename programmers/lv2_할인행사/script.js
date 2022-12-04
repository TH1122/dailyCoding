function solution(want, number, discount) {
  let res = 0;
  for (let m = 0; m <= discount.length - 10; m++) {
    let temp = number.slice();
    for (let i = 0; i < 10; i++) {
      let idx = want.indexOf(discount[m + i]);
      if (idx >= 0) {
        temp[idx]--;
      } else break;
    }
    let s = new Set(temp);
    if (s.size === 1 && s.has(0)) res++;
  }
  return res;
}
