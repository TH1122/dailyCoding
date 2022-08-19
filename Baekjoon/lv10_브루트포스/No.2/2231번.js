const target = Number(
  require("fs").readFileSync("/dev/stdin").toString().trim()
);

let result = 0;
for (let i = 1; i < target; i++) {
  let temp = i;
  let str = String(i);
  for (let k = 0; k < str.length; k++) {
    temp += Number(str[k]);
  }
  if (temp === target) {
    result = i;
    break;
  }
}
console.log(result);
