const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim());
let temp = 1;
let result = 1;
while(temp<input) {
    temp += result*6
    result ++;
}
console.log(result)