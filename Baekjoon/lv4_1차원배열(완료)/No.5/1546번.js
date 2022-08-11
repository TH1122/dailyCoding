const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let sum = 0;

let num_arr = input[1].split(" ").map(Number);

num_arr.forEach(el => sum+=el);
sum = sum/Math.max(...num_arr)*100;

console.log(sum/Number(input[0]))