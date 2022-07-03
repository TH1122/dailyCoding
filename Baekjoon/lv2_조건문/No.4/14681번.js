const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on("line", function (line) {
  input.push(parseInt(line));
}).on("close", function () {

const A = parseInt(input[0]);
const B = parseInt(input[1]);

if(A>0) {
    if (B>0) {
        console.log(1);
    }
    else {
        console.log(4);
    }
}
else {
    if (B>0) {
        console.log(2);
    }
    else {
        console.log(3);
    }
}
process.exit();
});