function solution(arr) {
  let res = [0, 0];
  const check_same = (check_arr) => {
    let s = new Set(check_arr.flat());
    return s.size === 1 ? (s.has(0) ? [[0]] : [[1]]) : check_arr;
  };
  if (check_same(arr).length === 1) {
    if (arr[0][0] === 0) res[0]++;
    else res[1]++;
    return res;
  }

  const check = (target_arr) => {
    if (target_arr.length === 1) {
      if (target_arr[0][0] === 0) res[0]++;
      else res[1]++;
      return;
    }
    let first = [];
    let second = [];
    let third = [];
    let fourth = [];
    let len = target_arr.length / 2;
    let upper = target_arr.slice(0, len);
    let lower = target_arr.slice(len);
    for (let i = 0; i < len; i++) {
      first.push(upper[i].slice(0, len));
      third.push(lower[i].slice(0, len));
      second.push(upper[i].slice(len));
      fourth.push(lower[i].slice(len));
    }
    let test = [first, second, third, fourth];
    let final = [];
    while (test.length) {
      let testCase = test.shift();
      final.push(check_same(testCase));
    }
    for (let new_arr of final) {
      check(new_arr);
    }
  };
  check(arr);
  return res;
}
