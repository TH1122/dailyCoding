function solution(priorities, location) {
  let result = 0;
  let arr = Array.from({ length: priorities.length }, (_, idx) => idx);
  while (arr.length) {
    let temp = arr.shift();
    let prio = priorities[temp];
    let max = Math.max(...priorities);
    if (prio >= max) {
      result++;
      priorities[temp] = 0;
      if (temp === location) break;
    } else {
      arr.push(temp);
    }
  }
  return result;
}
