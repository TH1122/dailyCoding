function solution(n) {
    if(n === 0) {
        return 0;
    }
    let str = String(n);
    return Number(str[0]) + solution(Number(str.slice(1)))
}