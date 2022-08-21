const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

rl.on("line", function (line) {
  input = parseInt(line);
}).on("close", function () {
  let result = "";
  while (input > 1) {
    for (let i = 2; i <= input; i++) {
      if (input % i === 0) {
        result += `${i}\n`;
        input = input / i;
        break;
      }
    }
  }
  console.log(result.trim());

  process.exit();
});
