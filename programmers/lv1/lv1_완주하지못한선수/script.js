function solution(participant, completion) {
    let answer;
    let obj = {};
    participant.forEach(el => {
        (el in obj)? obj[el] += 1
        : obj[el] = 1
    });
    completion.forEach(el => {
        obj[el] -= 1
    });
    participant.forEach(el => {
        if(obj[el]>0) {answer = el}
    })
    return answer;
}