var mySqrt = function(x) {
    if (x <= 1) {
        return x;
    }
    else {
        for (let i=2; i<=x; i++) {
            if(i*i === x) {
                return i;
            }
            else if (i*i > x) {
                return i-1
            }
        }
    }  
};