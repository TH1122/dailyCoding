function solution(skill, skill_trees) {
  let answer = 0;
  skill_trees.forEach((el) => {
    let prev = -1;
    let check = true;
    for (let i = 0; i < el.length; i++) {
      let idx = skill.indexOf(el[i]);
      if (idx >= 0) {
        if (prev + 1 === idx) {
          prev = idx;
        } else {
          check = false;
          break;
        }
      }
    }
    check ? answer++ : null;
  });
  return answer;
}
