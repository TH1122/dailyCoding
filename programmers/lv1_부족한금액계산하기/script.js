function solution(price, money, count) {
  const getTotalPrice = (price, count) => {
    if (count === 1) {
      return price;
    }
    return price * count + getTotalPrice(price, count - 1);
  };
  const total = getTotalPrice(price, count);
  return total > money ? total - money : 0;
}
