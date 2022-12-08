function solution(board, moves) {
  let temp = [];
  let count = 0;
  for (let i = 0; i < moves.length; i++) {
    for (let k = 0; k < board.length; k++) {
      if (board[k][moves[i] - 1] !== 0) {
        temp.push(board[k][moves[i] - 1]);
        board[k][moves[i] - 1] = 0;
        break;
      }
    }
    for (let j = temp.length - 1; j > 0; j--) {
      if (temp[j] === temp[j - 1]) {
        temp = temp.slice(0, j - 1);
        count += 2;
      }
    }
  }
  return count;
}
