function solution(s) {
  let result = "";
  let check = 1;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      result += s[i];
      check = 1;
    } else {
      let temp = s[i];
      check % 2 === 1
        ? (temp = temp.toUpperCase())
        : (temp = temp.toLowerCase());
      result += temp;
      check++;
    }
  }
  return result;
}
