const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const A = parseInt(input[0]);
const B = input[1].split("");

console.log(`${A*B[2]}
${A*B[1]}
${A*B[0]}
${A*B[0]*100+A*B[1]*10+A*B[2]}`)