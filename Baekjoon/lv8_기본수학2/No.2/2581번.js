const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map(Number);

let temp = [];
for (let i = input[0]; i <= input[1]; i++) {
  for (let k = 2; k <= i; k++) {
    k === i ? temp.push(i) : null;
    if (i % k === 0) {
      break;
    }
  }
}
if (temp.length === 0) {
  console.log(`-1`);
} else {
  console.log(`${temp.reduce((acc, cur) => acc + cur, 0)}\n${temp[0]}`);
}
