function solution(nums) {
  let temp = [];
  nums.forEach((el) => {
    if (!temp.includes(el)) temp.push(el);
  });
  return Math.min(temp.length, nums.length / 2);
}
