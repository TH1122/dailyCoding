function solution(n) {
    if(n === 0) {
        return 0;
    }
    let str = String(n);
    return Number(str[0]) + solution(Number(str.slice(1)))
}

/* 방법 2
function solution(n) {
    return String(n).split("").reduce((acc, cur) => acc + Number(cur),0)
} 
*/