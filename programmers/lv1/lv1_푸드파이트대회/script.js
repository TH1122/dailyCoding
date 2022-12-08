function solution(food) {
  let res = "0";
  while (food.length >= 2) {
    let cal = String(food.length - 1);
    let num = food.pop();
    num = Math.floor(num / 2);
    for (let i = 0; i < num; i++) {
      res = cal + res;
      res += cal;
    }
  }
  return res;
}
