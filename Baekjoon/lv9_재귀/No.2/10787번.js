const input = Number(
  require("fs").readFileSync("/dev/stdin").toString().trim()
);
const fibo = (num) => {
  if (num <= 1) {
    return num;
  }
  return fibo(num - 1) + fibo(num - 2);
};
console.log(fibo(input));
