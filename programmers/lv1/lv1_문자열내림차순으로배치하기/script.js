function solution(s) {
  let answer = "";
  let arr = s.split("");
  let rank = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  arr.sort((a, b) => rank.indexOf(b) - rank.indexOf(a));
  arr.forEach((el) => (answer += `${el}`));
  return answer;
}
