const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let result ='';
for (let i=1; i<=Number(input[0]); i++) { 
    let temp = input[i].split(" ").map(Number)
    result += `Case #${i}: ${temp[0]} + ${temp[1]} = ${temp[0]+temp[1]}\n`
}
console.log(result.trim())