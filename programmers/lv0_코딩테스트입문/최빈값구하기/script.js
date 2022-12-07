function solution(array) {
  let res = { res: 0, max: 0, check: false };
  let obj = {};
  array.forEach((el) => {
    obj[el] ? obj[el]++ : (obj[el] = 1);
  });
  for (let num in obj) {
    if (obj[num] === res.max) res.check = true;
    else if (obj[num] > res.max) {
      res.max = obj[num];
      res.res = Number(num);
      res.check = false;
    }
  }
  return res.check ? -1 : res.res;
}
