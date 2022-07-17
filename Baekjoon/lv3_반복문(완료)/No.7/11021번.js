const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let result ='';
for (let i=1; i<=Number(input[0]); i++) {
    let sum = 0;
    input[i].split(" ").map(Number).forEach(el => sum += el)
    result += `Case #${i}: ${sum}\n`
}
console.log(result.trim())