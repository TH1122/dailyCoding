function solution(progresses, speeds) {
  let temp = [];
  let res = [];
  for (let i = 0; i < progresses.length; i++) {
    let num = Math.ceil((100 - progresses[i]) / speeds[i]);
    if (temp.length === 0 || temp[0] >= num) {
      temp.push(num);
    } else if (temp[0] < num) {
      res.push(temp.length);
      temp = [num];
    }
  }
  if (temp.length !== 0) {
    res.push(temp.length);
  }
  return res;
}
