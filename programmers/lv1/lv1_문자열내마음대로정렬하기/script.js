function solution(strings, n) {
    strings.sort( (a,b) => {
        if (a[n] > b[n]) {
            return 1;
        }
        if (a[n] < b[n]) {
            return -1;
        }
        for(let i=0; i<Math.min(a.length,b.length); i++) {
            if (a[i] > b[i]) {
                return 1;
            }
            if (a[i] < b[i]) {
                return -1;
            }
        }
    })
    return strings
}