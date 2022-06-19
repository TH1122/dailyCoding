function solution(new_id) {
    let answer = '';
    let allow_limit = 'abcdefghijklmnopqrstuvwxyz-_.1234567890';
    new_id = new_id.toLowerCase();
    for(let i=0; i<new_id.length; i++) {
        if (new_id[i]=== '.') {
            if (answer.slice(-1)!== '.') {
                answer += new_id[i];
            }
        }
        else if(allow_limit.includes(new_id[i])) {
            answer += new_id[i];
        }
    }
    console.log(answer,'1');
    if (answer[0] === '.') {
        answer = answer.slice(1);
    }
    console.log(answer,'2');
    if (answer[answer.length-1]=== '.') {
        answer = answer.slice(0,answer.length-1);
    }
    console.log(answer,'3');
    if (answer.length === 0) {
        answer = 'a';
    }
    else if (answer.length >= 16) {
        answer = answer.slice(0,15)
        if(answer[14]==='.') {
            answer = answer.slice(0,14)
        }
    }
    console.log(answer,'4');
    if (answer.length === 1) {
        answer = answer.concat(answer).concat(answer)
    }
    else if(answer.length === 2) {
        answer = answer.concat(answer[1])
    }
    console.log(answer,'5');
    return answer;
}