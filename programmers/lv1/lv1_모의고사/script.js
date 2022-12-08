function solution(answers) {
  const no_1 = [1, 2, 3, 4, 5];
  const no_2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const no_3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let temp = { 1: 0, 2: 0, 3: 0 };
  for (let i = 0; i < answers.length; i++) {
    if (no_1[i % 5] === answers[i]) temp[1]++;
    if (no_2[i % 8] === answers[i]) temp[2]++;
    if (no_3[i % 10] === answers[i]) temp[3]++;
  }
  const max = Math.max(...Object.values(temp));
  let res = [];
  for (let k = 1; k <= 3; k++) {
    temp[k] === max ? res.push(k) : null;
  }
  return res;
}
