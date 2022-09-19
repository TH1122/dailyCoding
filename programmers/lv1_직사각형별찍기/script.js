process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
  let temp = "";
  let result = "";
  for (let i = 0; i < a; i++) {
    temp += "*";
  }
  for (let k = 0; k < b; k++) {
    result += `${temp}\n`;
  }
  console.log(result.trim());
});
