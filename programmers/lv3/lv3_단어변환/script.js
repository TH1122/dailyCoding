function solution(begin, target, words) {
  let res = [];
  let temp = begin;
  const check = (checker, root, count) => {
    if (checker === target) {
      res.push(count);
      return;
    }
    if (root.includes(checker)) return;
    if (count >= Math.min(...res)) return;
    if (count >= words.length) return;
    for (let i = 0; i < checker.length; i++) {
      let new_checker = checker.slice(0, i) + checker.slice(i + 1);
      words.forEach((el) => {
        let word_checker = el.slice(0, i) + el.slice(i + 1);
        if (new_checker === word_checker) {
          let Count = count + 1;
          check(el, [...root, checker], Count);
        }
      });
    }
  };
  check(begin, [], 0);
  return res.length ? Math.min(...res) : 0;
}
