function solution(s) {
  let arr = s.split(" ").map(Number);
  let result = "";
  result += Math.min(...arr) + " ";
  result += Math.max(...arr);
  return result;
}
