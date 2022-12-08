function solution(s){
    return (s.toLowerCase().replace(/[^p]/gi,"").length === s.toLowerCase().replace(/[^y]/gi,"").length)? true : false;
}