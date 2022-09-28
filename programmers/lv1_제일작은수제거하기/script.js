function solution(arr) {
  let result = arr
    .slice(0, arr.indexOf(Math.min(...arr)))
    .concat(arr.slice(arr.indexOf(Math.min(...arr)) + 1));
  return result.length === 0 ? [-1] : result;
}
