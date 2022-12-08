function solution(s) {
  let res = [0, 0];
  let len = s.length;
  let len_trans = len;
  while (len !== 1) {
    s = s.replaceAll("0", "");
    len_trans = s.length;
    let diff = len - len_trans;
    res[0]++;
    res[1] += diff;
    s = len_trans.toString(2);
    len = s.length;
  }
  return res;
}
