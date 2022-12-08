function solution(ingredient) {
  let count = 0;
  let str = ingredient.join("");
  let idx = 0;
  while (idx < str.length) {
    let temp = str.substring(idx, idx + 4);
    if (temp === "1231") {
      count++;
      str = str.slice(0, idx) + str.slice(idx + 4);
      idx -= 3;
    } else {
      idx++;
    }
  }
  return count;
}
