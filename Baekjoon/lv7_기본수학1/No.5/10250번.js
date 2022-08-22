const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const data = input.slice(1);
for (let i = 0; i < data.length; i++) {
  let res2 = 1;
  let condition = data[i].trim().split(" ").map(Number);
  let height = condition[0];
  let target = condition[2];
  while (target > height) {
    target -= height;
    res2++;
  }
  res2 = String(res2).padStart(2, "0");
  console.log(target + res2);
}
