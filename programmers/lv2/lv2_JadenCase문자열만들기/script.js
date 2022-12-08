function solution(s) {
  let arr = s.split(" ");
  arr.forEach((el, idx) => {
    let temp = el;
    if (temp.length > 0) {
      if (typeof temp[0] !== "number") {
        temp = temp[0].toUpperCase() + temp.slice(1).toLowerCase();
      } else {
        temp = temp[0] + temp.slice(1).toLowerCase();
      }
      arr[idx] = temp;
    }
  });
  return arr.join(" ");
}
