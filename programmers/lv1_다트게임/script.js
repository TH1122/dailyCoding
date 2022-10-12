function solution(dartResult) {
  let res = [0];
  let queue = [];
  let num = 0;
  for (let i = 1; i < dartResult.length; i++) {
    if (i === dartResult.length - 1) {
      queue.push(dartResult.slice(num));
      break;
    }
    if (Number(dartResult[i]) >= 0) {
      if (i !== 1) {
        queue.push(dartResult.slice(num, i));
        num = i;
      } else {
        num = 0;
      }
      dartResult[i + 1] === "0" ? i++ : null;
    }
  }
  while (queue.length) {
    let key = queue.shift();
    let score = 0;
    key.slice(0, 2) === "10" ? (score = 10) : (score = Number(key.slice(0, 1)));
    !key.includes("S")
      ? key.includes("D")
        ? (score = Math.pow(score, 2))
        : (score = Math.pow(score, 3))
      : null;
    let len = res.length;
    if (key.includes("*")) {
      res[len - 1] *= 2;
      score *= 2;
    } else if (key.includes("#")) {
      score *= -1;
    }
    res.push(score);
  }
  return res.reduce((acc, cur) => acc + cur, 0);
}
