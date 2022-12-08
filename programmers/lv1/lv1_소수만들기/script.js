function solution(nums) {
  const check = (num) => {
    if (num === 1) {
      return true;
    }
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };
  let result = [];
  let count = 0;
  for (let k = 0; k < nums.length; k++) {
    let temp = Array(3);
    temp[0] = nums[k];
    for (let j = k + 1; j < nums.length; j++) {
      temp[1] = nums[j];
      for (let m = j + 1; m < nums.length; m++) {
        temp[2] = nums[m];
        result.push(temp.slice());
      }
    }
  }
  result = result.map((el) => {
    return el.reduce((acc, cur) => acc + cur, 0);
  });
  for (let l = 0; l < result.length; l++) {
    if (check(result[l])) count++;
  }

  return count;
}
