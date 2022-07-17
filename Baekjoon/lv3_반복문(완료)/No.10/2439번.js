const input = Number(require('fs').readFileSync('/dev/stdin').toString());
let result = "";

for (let i=1; i<=input; i++) {
    result += "".padStart(input-i," ").padEnd(input,"*").concat("\n")
};
console.log(result.slice(0,-1))