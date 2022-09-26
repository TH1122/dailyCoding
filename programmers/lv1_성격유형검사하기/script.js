function solution(survey, choices) {
  let answer = "";
  // 유형을 key로 가지는 객체 score를 만들고, 초기값을 0으로 설정
  // survey나 choices를 순회해서 choice에 맞게 score의 밸류를 업데이트
  // 순회가 완료되면 [["R", "T"], ["C", "F"], ["J", "M"], ["A", "N"]]을 순회해서 score의 밸류가 큰것을 answer+=밸류, 같으면 el[0]이 업데이트 되게
  let score = {};
  let result_arr = [
    ["R", "T"],
    ["C", "F"],
    ["J", "M"],
    ["A", "N"],
  ];
  result_arr.forEach((el) => {
    score[el[0]] = 0;
    score[el[1]] = 0;
  });
  for (let i = 0; i < choices.length; i++) {
    let key = choices[i];
    key >= 5
      ? (score[survey[i][1]] += key - 4)
      : (score[survey[i][0]] += 4 - key);
  }
  result_arr.forEach((el) => {
    score[el[0]] >= score[el[1]] ? (answer += el[0]) : (answer += el[1]);
  });

  return answer;
}
