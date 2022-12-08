function solution(s) {
  return s.length % 2 === 0
    ? (answer = `${s[s.length / 2 - 1]}${s[s.length / 2]}`)
    : (answer = `${s[Math.floor(s.length / 2)]}`);
}
