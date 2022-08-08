const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
let total = 0;
for (let i = 2; i < input.length; i++) {
  let temp = input[i].split(" ").map(Number);
  total += temp[0] * temp[1];
}
total === Number(input[0]) ? console.log("Yes") : console.log("No");
