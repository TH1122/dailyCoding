function solution(num, count) {
    if(count === undefined) {
        count = 0
    }
    else if(count ===500) {
        return -1;
    }
    if(num === 1) {
        return count;
    }
    else if (num % 2 === 0) {
        num = num/2;
    }
    else if (num % 2 !== 0) {
        num = num*3 + 1;
    }
    count ++;
    return solution(num, count)
}