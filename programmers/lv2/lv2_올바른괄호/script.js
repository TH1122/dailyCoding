function solution(s) {
  let check = 0;
  for (let i of s) {
    i === "(" ? check++ : check--;
    if (check < 0) {
      return false;
    }
  }
  return check === 0;
}
