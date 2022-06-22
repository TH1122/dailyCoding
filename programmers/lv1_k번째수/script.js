function solution(array, commands) {
    var answer = [];
    commands.forEach( el => {
        let [i,j,k] = el;
        answer.push(array.slice(i-1,j).sort(function(a, b) {
            return a - b;
          })[k-1])
    });
    return answer;
}