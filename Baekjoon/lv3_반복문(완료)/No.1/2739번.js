const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim());

let result = ''
for(let i=1; i<=9; i++) {
    result += `${input} * ${i} = ${input*i}\n`
}
result = result.slice(0,-1);
console.log(result)