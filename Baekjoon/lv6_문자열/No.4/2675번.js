const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let result = "";
for(let i=1; i<=Number(input[0].trim()); i++) {
    let temp = input[i].split(" ");
    for (let k=0; k<temp[1].length; k++) {
        for (let j=1; j<=Number(temp[0]); j++) {
            result += temp[1][k]
        }
    }
    result += "\n"
}
console.log(result.trim())