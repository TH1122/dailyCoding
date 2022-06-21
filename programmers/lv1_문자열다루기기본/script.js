function solution(s) {
    let answer = true;
    let len = s.length;
    if(len<4 || len === 5 || len>6) {
        answer = false;
    }
    if(s.replace(/[^0-9]/,"").length < len) {
        answer = false;
    }
    return answer;
}