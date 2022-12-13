function solution(dirs) {
  let res = 0;
  let pass = [];
  let now = [0, 0];
  const next = (arr, direction) => {
    let temp = [];
    if (direction === "L") {
      temp = [arr[0] - 1, arr[1]];
    } else if (direction === "R") {
      temp = [arr[0] + 1, arr[1]];
    } else if (direction === "U") {
      temp = [arr[0], arr[1] + 1];
    } else if (direction === "D") {
      temp = [arr[0], arr[1] - 1];
    }
    return temp.includes(6) || temp.includes(-6) ? false : temp;
  };
  for (let i = 0; i < dirs.length; i++) {
    let next_point = next(now, dirs[i]);
    if (next_point) {
      let path_x = [now[0], next_point[0]].sort((a, b) => b - a).map(String);
      let path_y = [now[1], next_point[1]].sort((a, b) => b - a).map(String);
      let path = path_x[0] + path_x[1] + path_y[0] + path_y[1];
      if (!pass.includes(path)) {
        pass.push(path);
        res++;
      }
      now = next_point.slice();
    }
  }
  return res;
}
