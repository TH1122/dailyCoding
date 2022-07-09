const input = require('fs').readFileSync('/dev/stdin').toString().trim();

let alphabet = "abcdefghijklmnopqrstuvwxyz";
let result = "";

for(let i=0; i<alphabet.length; i++) {
    for(let k=0; k<input.length; k++) {
        if(alphabet[i] === input[k]) {
            result += `${k} `;
            break;
        }
        if(k===input.length-1) {
            result += `-1 `;
        }
    }
}
console.log(result.trim())