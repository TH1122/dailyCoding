function solution(elements) {
  let res = [];
  let len = elements.length;
  let new_elements = elements.concat(elements);
  for (let i = 0; i < len; i++) {
    let sum = 0;
    for (let m = i; m < i + len; m++) {
      sum += new_elements[m];
      res.push(sum);
    }
  }
  let s = new Set(res);
  return s.size;
}
