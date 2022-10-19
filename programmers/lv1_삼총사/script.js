function solution(number) {
  let count = 0;
  const check = (arr, num) => {
    if (num > number.length) return;
    if (arr.length === 3) {
      let sum = arr.reduce((acc, cur) => acc + cur, 0);
      sum === 0 ? count++ : null;
      return;
    }
    check([...arr, number[num]], num + 1);
    check(arr, num + 1);
  };
  check([], 0);
  return count;
}
