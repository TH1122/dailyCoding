function solution(brown, yellow) {
  const sum = brown + yellow;
  for (let i = 3; i <= sum / 3; i++) {
    let height = sum / i;
    for (k = 1; k <= height; k++) {
      let small = (i - 2) * k;
      if (small === yellow && sum - small === brown && i * (k + 2) === sum) {
        return [k + 2, i];
      }
    }
  }
}
