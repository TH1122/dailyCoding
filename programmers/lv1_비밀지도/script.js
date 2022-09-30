function solution(n, arr1, arr2) {
  let res = [];
  for (let i = 0; i < n; i++) {
    let temp1 = arr1[i].toString(2).padStart(n, "0");
    let temp2 = arr2[i].toString(2).padStart(n, "0");
    let temp = "";
    for (let k = 0; k < n; k++) {
      temp1[k] === "0" && temp2[k] === "0" ? (temp += " ") : (temp += "#");
    }
    res.push(temp);
  }
  return res;
}
