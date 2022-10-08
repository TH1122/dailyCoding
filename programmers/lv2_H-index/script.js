function solution(citations) {
  let max = Math.max(...citations);
  let total = citations.length;
  for (let i = max; i >= 0; i--) {
    let count = 0;
    for (let k = 0; k < total; k++) {
      if (citations[k] >= i) {
        count++;
      }
      if (k === total - 1) {
        if (count >= i && total - count <= i) {
          return i;
        }
      }
    }
  }
}
