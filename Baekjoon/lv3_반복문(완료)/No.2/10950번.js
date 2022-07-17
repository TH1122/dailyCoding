const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let result = '';
for(let i=1; i<=Number(input[0]); i++) {
    let temp = 0;
    input[i].trim().split(' ').map(Number).forEach(el => temp += el);
    result += `${temp}\n`
}
result = result.slice(0,-1);
console.log(result);