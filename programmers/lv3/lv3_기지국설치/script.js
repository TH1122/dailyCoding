function solution(n, stations, w) {
  let res = 0;
  let point = 0;
  let queue = [];
  for (let i = 0; i < stations.length; i++) {
    let key = stations[i];
    if (point < key - w) queue.push(key - w - point - 1);
    if (key + w < n) {
      point = key + w;
    } else {
      point = n + 1;
    }
  }
  if (point < n) queue.push(n - point);
  let max = 2 * w + 1;
  while (queue.length) {
    let size = queue.shift();
    res += Math.ceil(size / max);
  }
  return res;
}
