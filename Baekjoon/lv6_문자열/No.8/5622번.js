const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const str = "ABC DEF GHI JKL MNO PQRSTUV WXYZ";
let temp = 0;
for (let i = 0; i < input.length; i++) {
  temp += Math.floor(str.indexOf(input[i]) / 4) + 3;
}
console.log(temp);
