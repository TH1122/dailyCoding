function solution(s) {
  let stack = [];
  while (s.length) {
    stack.push(s[0]);
    s = s.slice(1);
    if (stack[stack.length - 1] === stack[stack.length - 2]) {
      stack.pop();
      stack.pop();
    }
  }
  return stack.length ? 0 : 1;
}
