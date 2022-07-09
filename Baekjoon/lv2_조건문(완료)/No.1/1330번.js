const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

const check = (el1, el2) => {
    return (el1===el2)? console.log("==") : (el1>el2)? console.log(">") : console.log("<")
}

check(parseInt(input[0]),parseInt(input[1]));