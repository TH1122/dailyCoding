function solution(n, words) {
  let res = [0, 0];
  let checked = [];
  let idx = 2;
  let wrong = 0;
  let temp = words.shift();
  checked.unshift(temp);
  while (words.length) {
    let check = words.shift();
    let target = checked[0];
    if (checked.includes(check) || target[target.length - 1] !== check[0]) {
      wrong = idx;
      break;
    } else {
      checked.unshift(check);
      idx++;
    }
  }
  if (wrong !== 0) {
    let num = 1;
    while (num * n < wrong) {
      num++;
    }
    res[0] = wrong - (num - 1) * n;
    res[1] = num;
  }
  return res;
}
