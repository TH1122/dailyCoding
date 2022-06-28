function solution(n) {
    let result = -1;
    for (let i=1; i*i<=n; i++) {
        if(n===i*i) {
            result = (i+1)*(i+1)
        }
    }
    return result;
}