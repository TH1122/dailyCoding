function solution(s) {
    let arr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    for (let i=0; i<arr.length; i++) {
        if(s.includes(arr[i])) {
            s = s.replace(arr[i], i);
            i -= 1;
        }
    }
    return Number(s);
}

/* 방법2
function solution(s) {
    let arr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    for (let i=0; i<arr.length; i++) {
        if(s.includes(arr[i])) {
            let re = new RegExp(arr[i],"g");
            s = s.replace(re, i);
        }
    }
    return Number(s);
}
*/
