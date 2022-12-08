function solution(n, lost, reserve) {
  const Lost1 = lost.filter((el) => !reserve.includes(el));
  const Reserve1 = reserve.filter((el) => !lost.includes(el));
  const Lost2 = Lost1.slice();
  const Reserve2 = Reserve1.slice();

  Reserve1.forEach((el) => {
    if (Lost1.includes(el - 1)) {
      let idx = Lost1.indexOf(el - 1);
      Lost1.splice(idx, 1);
    } else if (Lost1.includes(el + 1)) {
      let idx = Lost1.indexOf(el + 1);
      Lost1.splice(idx, 1);
    }
  });

  Reserve2.forEach((el) => {
    if (Lost2.includes(el - 1)) {
      let idx = Lost2.indexOf(el + 1);
      Lost2.splice(idx, 1);
    } else if (Lost2.includes(el + 1)) {
      let idx = Lost2.indexOf(el - 1);
      Lost2.splice(idx, 1);
    }
  });
  return n - Math.min(Lost1.length, Lost2.length);
}
