function solution(n) {
  let degree = 1;
  let num = n;
  if (num > 3) {
    num -= 3;
    while (num > 0) {
      degree++;
      if (num <= Math.pow(3, degree)) break;
      num -= Math.pow(3, degree);
    }
  }
  let res = "";
  while (degree > 1) {
    let division = Math.pow(3, degree) / 3;
    if (num > division * 2) {
      res += "4";
      num -= division * 2;
    } else if (num > division) {
      res += "2";
      num -= division;
    } else res += "1";
    degree--;
  }
  num >= 2 ? (num === 3 ? (res += "4") : (res += "2")) : (res += "1");
  return res;
}
