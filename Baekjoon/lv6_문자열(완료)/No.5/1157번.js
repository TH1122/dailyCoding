const input = require('fs').readFileSync('/dev/stdin').toString().trim().toUpperCase();

let count = {};
for (let i=0; i<input.length; i++) {
    (count[input[i]])? count[input[i]]+=1 : count[input[i]]=1;
}
let max_value = 0;
let max = [];
for (let x in count) {
    if (count[x]===max_value) {
        max.push(x)
    }
    else if (count[x]>max_value) {
        max_value = count[x];
        max = [x];
    }
}
(max.length===1)? console.log(...max) : console.log("?");

/* 첫 번째 코드 작성 내역
const input = require('fs').readFileSync('/dev/stdin').toString().trim().toUpperCase();

let count = {};
for (let i=0; i<input.length; i++) {
    (Object.keys(count).includes(input[i]))? count[input[i]]+=1 : count[input[i]]=1;
}
let max_value = 0;
let max = [];
for (let x in count) {
    if (count[x]===max_value) {
        max.push(x)
    }
    else if (count[x]>max_value) {
        max_value = count[x];
        max = [x];
    }
}
(max.length===1)? console.log(...max) : console.log("?");
*/