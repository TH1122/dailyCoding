const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const check = (m, n) => {
  if (n === 1) {
    return 1;
  }
  if (m === 0) {
    return n;
  }
  return check(m - 1, n) + check(m, n - 1);
};

for (let i = 1; i < input.length - 1; i += 2) {
  let result = "";
  let floor = Number(input[i]);
  let num = Number(input[i + 1]);
  console.log(check(floor, num));
}
