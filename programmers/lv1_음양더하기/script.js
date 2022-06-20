function solution(absolutes, signs) {
    let result = 0;
    absolutes.forEach( (el,idx) => {
        (signs[idx])? result += el : result -= el;
    } )
    return result;
}