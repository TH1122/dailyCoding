const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')[1].split(" ").map(Number);

input.sort((a,b)=>a-b);

console.log(`${input[0]} ${input[input.length-1]}`)