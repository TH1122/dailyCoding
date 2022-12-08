function solution(n, works) {
  let res = 0;
  let obj = {};
  works.forEach((el) => {
    if (obj[el]) obj[el]++;
    else obj[el] = 1;
  });
  let max = Math.max(...works);
  while (n > 0) {
    if (max === 0) return 0;
    let count = obj[max];
    if (n >= count) {
      n -= count;
      delete obj[max];
      if (obj[max - 1]) obj[max - 1] += count;
      else obj[max - 1] = count;
      max = Math.max(...Object.keys(obj));
    } else {
      obj[max] -= n;
      if (obj[max - 1]) obj[max - 1] += n;
      else obj[max - 1] = n;
      n = 0;
    }
  }
  let final_key = Object.keys(obj);
  final_key.forEach((el) => {
    res += Math.pow(Number(el), 2) * obj[el];
  });
  return res;
}
