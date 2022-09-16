function solution(numbers, target) {
  let answer = 0;
  const DFS = (arr, target, sum) => {
    let temp = arr.shift();
    if (arr.length === 0) {
      sum + temp === target || sum - temp === target ? answer++ : null;
      return;
    }
    DFS(arr.slice(), target, sum + temp);
    DFS(arr.slice(), target, sum - temp);
  };
  DFS(numbers, target, 0);
  return answer;
}
