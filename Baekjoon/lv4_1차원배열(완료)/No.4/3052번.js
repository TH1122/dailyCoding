const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on("line", function (line) {
  input.push(parseInt(line));
}).on("close", function () {

let result = [];

input.forEach(el => (!result.includes(el%42))? result.push(el%42) : null);
    
console.log(result.length)

process.exit();
});