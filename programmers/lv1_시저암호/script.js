function solution(s, n) {
    let index = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return s.split("").map(el => {
        if (el === " ") {
            return el
        }
        else {
            let idx = index.indexOf(el);
            if (idx<=25) {
                if (idx+n<=25) {
                    return index[idx+n];
                }
                else {
                    return index[idx+n-26]
                }
            }
            else if(idx>25) {
                if (idx+n<=51) {
                    return index[idx+n];
                }
                else {
                    return index[idx+n-26]
                }
            }
        }
    }).join("")
}