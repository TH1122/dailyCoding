function solution(word) {
  let base = "AEIOU";
  let queue = [];
  let check = (str) => {
    queue.push(str);
    if (str.length === 5) {
      return;
    }
    for (let i = 0; i < base.length; i++) {
      let temp = str + base[i];
      check(temp);
    }
  };
  check("");
  return queue.indexOf(word);
}
