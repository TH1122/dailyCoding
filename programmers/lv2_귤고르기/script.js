function solution(k, tangerine) {
  let obj = {};
  tangerine.forEach((el) => {
    if (obj[el]) obj[el]++;
    else obj[el] = 1;
  });
  let value = Object.values(obj);
  value.sort((a, b) => b - a);
  let count = 0;
  while (k > 0) {
    count++;
    let temp = value.shift();
    k -= temp;
  }
  return count;
}
