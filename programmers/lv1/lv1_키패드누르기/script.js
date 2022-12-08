function solution(numbers, hand) {
  let obj = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    "*": [3, 0],
    0: [3, 1],
    "#": [3, 2],
  };
  let start_left = "*";
  let start_right = "#";
  let result = "";
  for (let i = 0; i < numbers.length; i++) {
    if (obj[numbers[i]][1] === 0) {
      result += "L";
      start_left = String(numbers[i]);
    } else if (obj[numbers[i]][1] === 2) {
      result += "R";
      start_right = String(numbers[i]);
    } else {
      let left_count =
        Math.abs(obj[start_left][0] - obj[`${numbers[i]}`][0]) +
        Math.abs(obj[start_left][1] - obj[`${numbers[i]}`][1]);
      let right_count =
        Math.abs(obj[start_right][0] - obj[`${numbers[i]}`][0]) +
        Math.abs(obj[start_right][1] - obj[`${numbers[i]}`][1]);
      if (left_count === right_count) {
        if (hand === "left") {
          result += "L";
          start_left = String(numbers[i]);
        } else {
          result += "R";
          start_right = String(numbers[i]);
        }
      } else if (left_count < right_count) {
        result += "L";
        start_left = String(numbers[i]);
      } else if (left_count > right_count) {
        result += "R";
        start_right = String(numbers[i]);
      }
    }
  }
  return result;
}
