function solution(arr) {
  let obj = {};
  arr.forEach((el) => {
    let temp = {};
    for (let i = 2; i <= el; i++) {
      if (el % i === 0) {
        if (temp[i]) temp[i]++;
        else temp[i] = 1;
        el /= i;
        i = 1;
      }
    }
    for (let num in temp) {
      if (obj[num] && temp[num] <= obj[num]) continue;
      else obj[num] = temp[num];
    }
  });
  let res = 1;
  for (let base in obj) {
    res *= Math.pow(base, obj[base]);
  }
  return res;
}
