function solution(arr1, arr2) {
  let len1 = arr1.length;
  let len2 = arr2[0].length;
  let res = Array.from(Array(len1), () => Array());
  arr1.forEach((el, idx) => {
    for (let i = 0; i < len2; i++) {
      let sum = 0;
      for (let k = 0; k < el.length; k++) {
        sum += el[k] * arr2[k][i];
      }
      res[idx][i] = sum;
    }
  });
  return res;
}
