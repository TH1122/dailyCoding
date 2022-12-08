function solution(people, limit) {
  people.sort((a, b) => b - a);
  let count = 0;
  let start = 0;
  let end = people.length - 1;
  while (start <= end) {
    if (people[start] + people[end] <= limit) {
      end--;
    }
    start++;
    count++;
  }
  return count;
}
