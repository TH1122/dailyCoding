function solution(new_id) {
    let answer = new_id
        .toLowerCase() // 1단계 완성: 대문자 금지
        .replace(/[^a-z0-9-_.]+/g,"") // 2단계 완성
        .replace(/[.]+/g,".") // 3단계 완성
        .replace(/^\./,"")  
        .replace(/\.$/,"") //4단계 완성
        .padStart(1,"a") // 5단계 완성
        .substring(0,15)
        .replace(/\.$/,""); //6단계 완성
    return (answer.length > 2) ? answer
            : (answer.length === 2) ? `${answer}${answer.charAt(1)}`
            : answer.repeat(3); // 7단계 완성
}