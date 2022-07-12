const input = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);
let result = "-1";
let var_profit = input[2]-input[1];
if (var_profit>0) {
    result = String(Math.floor(input[0]/var_profit)+1);
}
console.log(result)