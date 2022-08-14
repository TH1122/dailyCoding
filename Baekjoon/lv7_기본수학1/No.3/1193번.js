const input = Number(
  require("fs").readFileSync("/dev/stdin").toString().trim()
);

if (input === 1) {
  console.log(`1/1`);
} else {
  let sum = 3;
  let first = true;
  let max = 3;
  while (input > max) {
    first = !first;
    max += sum;
    sum += 1;
  }
  let result;
  let result_1 = max - input + 1;
  let result_2 = sum - result_1;
  first
    ? (result = `${result_2}/${result_1}`)
    : (result = `${result_1}/${result_2}`);
  console.log(result);
}
