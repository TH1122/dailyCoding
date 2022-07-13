const fs = require("fs")
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const key = Number(input[0].split(" ")[1]);
const target = input[1].split(" ").map(Number);

let result = "";
for (let i=0; i<target.length; i++) {
    (target[i]<key)? result += `${target[i]} `: null;
}
console.log(result.trim())