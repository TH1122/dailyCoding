function solution(numbers) {
  let res = numbers.map(String);
  res.sort((a, b) => {
    let ab = Number(a + b);
    let ba = Number(b + a);
    if (ab > ba) return -1;
    if (ab < ba) return 1;
    else return 0;
  });
  res = res.reduce((acc, cur) => acc + cur, "");
  return res[0] === "0" ? "0" : res;
}
