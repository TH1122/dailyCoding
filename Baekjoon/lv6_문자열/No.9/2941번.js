const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const arr = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

let result = 0;

for (let i = 0; i < input.length; i++) {
  if (arr.includes(input[i] + input[i + 1] + input[i + 2])) {
    result += 1;
    i += 2;
  } else if (arr.includes(input[i] + input[i + 1])) {
    result += 1;
    i++;
  } else {
    result += 1;
  }
}

console.log(result);
