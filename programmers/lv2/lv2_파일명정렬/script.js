function solution(files) {
  let Files = files.map((el) => {
    let num = el.match(/\d+/g)[0];
    let idx = el.indexOf(num);
    let idx_end = idx + num.length;
    let head = el.slice(0, idx);
    let number = el.slice(idx, idx_end);
    let tail = el.slice(idx_end);
    return [head, number, tail];
  });
  Files.sort((a, b) => {
    a = a.map((el) => {
      return el.toUpperCase();
    });
    b = b.map((el) => {
      return el.toUpperCase();
    });
    if (b[0] > a[0]) return -1;
    else if (a[0] > b[0]) return 1;
    else {
      if (Number(b[1]) > Number(a[1])) return -1;
      else if (Number(a[1]) > Number(b[1])) return 1;
    }
  });
  let res = Files.map((el) => {
    el = el.join("");
    return el;
  });
  return res;
}
