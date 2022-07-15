const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const findCycle = (el, init) => {
    el = el.padStart(2,"0");
    let temp = String(Number(el[0]) + Number(el[1])).padStart(2,"0");
    let el_new = el[1]+temp[1];
    if(el_new === init) {
        return 1
    }
    return 1+findCycle(el_new, init);
}
let output = findCycle(input, input.padStart(2,"0"))
console.log(output)