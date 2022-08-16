const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const target = input[2];
const up = input[0];
const down = input[1];

console.log(Math.ceil((target - down) / (up - down)));
