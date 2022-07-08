const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let result = 0;

for (let i=0; i<input[1].length; i++) {
    result += Number(input[1][i]);
}

console.log(result)