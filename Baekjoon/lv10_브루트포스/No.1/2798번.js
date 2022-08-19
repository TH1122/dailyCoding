const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const condition = input[0].trim().split(" ").map(Number);
const card = input[1].trim().split(" ").map(Number);
const target = condition[1];
card.sort((a, b) => a - b);
let result = 0;
for (let i = 0; i < condition[0]; i++) {
  for (let k = i + 1; k < condition[0]; k++) {
    for (let j = k + 1; j < condition[0]; j++) {
      let sum = card[i] + card[k] + card[j];
      if (sum <= target && sum > result) {
        result = sum;
      }
    }
  }
}
console.log(result);
