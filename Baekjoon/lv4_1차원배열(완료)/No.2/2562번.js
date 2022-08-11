const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(Number);

let max = Math.max(...input);

console.log(`${max}
${input.indexOf(max)+1}`)