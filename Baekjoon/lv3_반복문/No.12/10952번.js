const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let result = ""
for (i=0; i<input.length-1; i++) {
    let sum = 0;
    input[i].trim().split(" ").map(Number).forEach(el => sum += el);
    result += `${sum}\n`
}
console.log(result.trim())