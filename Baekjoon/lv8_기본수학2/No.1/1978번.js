const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const arr = input[1].split(" ").map(Number);
let result = 0;
for (let i=0; i<Number(input[0]); i++) {
    for(let k=2; k<=arr[i]; k++) {
        if(k === arr[i]) {
            result += 1
        }
        if(arr[i]%k === 0) {
            break;
        }
    }
}
console.log(result)