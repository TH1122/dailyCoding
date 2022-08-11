const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const sum = (el) => {
    if(el === 1) {
        return 1
    }
    return el + sum(el-1)
}

let result = "";
for(let i=1; i<=Number(input[0]); i++) {
    let count = 0;
    let score = 0;
    for(let k=0; k<input[i].length; k++)  {
        if(input[i][k]==="O") {
            count++;
        }
        else if (input[i][k]==="X" && count>=1) {
            score += sum(count);
            count = 0;
        }
        if (k === input[i].length-1 && count>=1) {
            score += sum(count);
        }
    }
    result += `${score}\n`
}
console.log(result.trim())