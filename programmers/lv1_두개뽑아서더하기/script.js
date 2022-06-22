function solution(numbers) {
    let answer = [];
    for(let i=0; i<numbers.length; i++) {
        for(let k=i+1; k<numbers.length; k++) {
            let sum = numbers[i]+numbers[k]
            if(!answer.includes(sum)) {
                answer.push(sum);
            }
        }
    }
    return answer.sort((a,b) => a-b);
}