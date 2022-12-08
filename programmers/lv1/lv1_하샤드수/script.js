function solution(x) {
    return x % String(x).split("").map(el => Number(el)).reduce((acc,cur)=> acc+cur,0) === 0
}