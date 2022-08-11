const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let count = 0;
for (let i = 1; i <= Number(input[0]); i++) {
  let check = {};
  for (let k = 0; k < input[i].length; k++) {
    if (check[input[i][k]] && input[i][k] !== input[i][k - 1]) {
      break;
    } else {
      check[input[i][k]] = 1;
    }
    if (k === input[i].length - 1) {
      count++;
      break;
    }
  }
}
console.log(count);
