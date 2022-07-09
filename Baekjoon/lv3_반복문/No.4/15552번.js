const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let result = "";

for (let i=1; i<=Number(input[0]); i++) {
    let num = input[i].split(" ").map(Number);
    result += `${num[0]+num[1]}\n`
}

console.log(result.slice(0,-1))