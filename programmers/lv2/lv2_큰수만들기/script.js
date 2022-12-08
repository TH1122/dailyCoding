function solution(number, k) {
  let arr = [number[0]];
  let len = number.length - k;
  for (let i = 1; i < number.length; i++) {
    if (k === 0) {
      arr.push(number[i]);
      continue;
    }
    while (arr[arr.length - 1] < number[i] && k > 0) {
      arr.pop();
      k--;
    }
    if (arr.length < len) arr.push(number[i]);
  }
  return arr.join("");
}
