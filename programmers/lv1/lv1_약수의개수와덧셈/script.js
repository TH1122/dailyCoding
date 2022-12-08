function solution(left, right) {
    let result = 0;
    for(let i =left; i<=right; i++) {
        let isDouble = false;
        for(let k=1; k<=i; k++) {
            if(k*k === i) {
                isDouble = true;
            }
        }
        (isDouble)? result -= i : result += i;
    }
    return result;
}