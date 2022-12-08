function solution(arr1, arr2) {
    let result = arr1.slice()
    for(let i=0; i<arr1.length; i++) {
        for(let k=0; k<arr1[i].length; k++) {
            result[i][k] = arr1[i][k] + arr2[i][k];
        }
    }
    return result
}