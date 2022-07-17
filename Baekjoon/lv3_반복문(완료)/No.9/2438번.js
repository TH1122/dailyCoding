const input = Number(require('fs').readFileSync('/dev/stdin').toString())
let result = "";

for(let i=1; i<=input; i++) {
    result += "".padStart(i,"*").concat("\n")
}
console.log(result.trim())