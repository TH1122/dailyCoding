const fs = require("fs")
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(BigInt);
const mul = String(input[0]*input[1]*input[2]);

let result = "";
for (let i=0; i<=9; i++) {
    let count = 0;
    for (let k=0; k<mul.length; k++) {
        (mul[k]===String(i))? count +=1: null;
    }
    result += `${count}\n`
}
console.log(result.trim())