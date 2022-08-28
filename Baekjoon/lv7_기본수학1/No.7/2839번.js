const input = Number(
  require("fs").readFileSync("/dev/stdin").toString().trim()
);

let count_five = Math.floor(input / 5);
let remainder = input % 5;
let count = -1;

while (count_five >= 0) {
  if (remainder % 3 === 0) {
    count = count_five + remainder / 3;
    break;
  }
  count_five--;
  remainder += 5;
}
console.log(count);
