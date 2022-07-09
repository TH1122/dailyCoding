const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

const A = parseInt(input[0]);
const B = parseInt(input[1]);

if(B-45<0) {
    if(A===0) {
        console.log(`23 ${B-45+60}`)
    }
    else {
        console.log(`${A-1} ${B-45+60}`)
    }
}
else {
    console.log(`${A} ${B-45}`)
}