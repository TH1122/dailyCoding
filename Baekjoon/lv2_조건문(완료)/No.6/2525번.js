const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const input_upper = input[0].split(' ').map(Number);
const A = input_upper[0];
const B = input_upper[1];
const C = parseInt(input[1]);
let D = B+C;
let E = A+Math.floor(D/60);
if (D>=60) {
    if (E>=24) {
        console.log(`${E-24} ${D%60}`)
    }
    else {
        console.log(`${E} ${D%60}`)
    }
}
else {
    console.log(`${A} ${D}`)
}