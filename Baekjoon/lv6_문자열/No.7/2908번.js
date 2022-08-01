const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");
input.forEach((el, idx) => (input[idx] = el.split("").reverse().join("")));
Number(input[0]) >= Number(input[1])
  ? console.log(input[0])
  : console.log(input[1]);
