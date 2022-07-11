const fs = require("fs")
const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim());

if(input<100) {
    console.log(input);
}
else {
    let count = 99;
    for (let i=111; i<=input; i++) {
        let checker = Number(String(i)[0])-Number(String(i)[1]);
        let isChecked = true;
        for (let k=1; k<=String(i).length-2; k++) {
            let check = Number(String(i)[k])-Number(String(i)[k+1])
            if (checker !== check) {
                isChecked = false;
                break;
            }
        }
        if (isChecked) {
            count +=1
        }
    }
    console.log(count);
}