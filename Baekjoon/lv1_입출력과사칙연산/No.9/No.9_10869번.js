const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

const A = parseInt(input[0]);
const B = parseInt(input[1]);

console.log(`${A+B}
${A-B}
${A*B}
${Math.floor(A/B)}
${A%B}`)