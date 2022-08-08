const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);
const set = [1, 1, 2, 2, 2, 8];
let result = "";
for (let i = 0; i < 6; i++) {
  result += `${set[i] - input[i]} `;
}
console.log(result.trim());
