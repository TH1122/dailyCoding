function solution(maps) {
  const target_row = maps.length;
  const target_column = maps[0].length;
  const direction = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  let count_arr = Array.from(Array(target_row), () =>
    Array(target_column).fill(1)
  );
  const BFS = () => {
    let queue = [[0, 0]];
    while (queue.length) {
      const [row, column] = queue.shift();
      if (row === target_row - 1 && column === target_column - 1) {
        return count_arr[row][column];
      }
      direction.forEach((el) => {
        let next = [row + el[0], column + el[1]];
        if (
          next[0] >= 0 &&
          next[1] >= 0 &&
          next[0] < target_row &&
          next[1] < target_column &&
          maps[next[0]][next[1]] === 1 &&
          count_arr[next[0]][next[1]] === 1
        ) {
          count_arr[next[0]][next[1]] = count_arr[row][column] + 1;
          queue.push(next);
        }
      });
    }
  };
  BFS();
  let result = count_arr[target_row - 1][target_column - 1];
  return result === 1 ? -1 : result;
}
