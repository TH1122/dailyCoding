function solution(lottos, win_nums) {
  let answer = new Array(2);
  let count = 0;
  let zero_count = 0;
  lottos.forEach((el) => {
    if (el === 0) {
      zero_count += 1;
    } else {
      for (let i = 0; i < win_nums.length; i++) {
        if (el === win_nums[i]) {
          count += 1;
        }
      }
    }
  });
  let rank;
  let max_rank;
  count >= 2 ? (rank = 7 - count) : (rank = 6);

  if (zero_count === 0) {
    answer.fill(rank);
  } else {
    if (rank === 6 && count === 0) {
      max_rank = rank - zero_count + 1;
    } else {
      max_rank = rank - zero_count;
    }
    answer.fill(max_rank, 0, 1);
    answer.fill(rank, 1);
  }
  return answer;
}
