function solution(n, m) {
    let answer = [1,n*m];
    for (let i=2; i<n*m; i++) {
        if(n%i === 0 && m%i === 0) {
            answer[0] = i;
        }
        if(i%n === 0 && i%m === 0) {
            answer[1] = i;
            break;
        }
    }
    return answer;
}