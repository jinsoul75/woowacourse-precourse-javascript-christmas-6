const dDayCalculator = day => {
  let discountAmount = 1000;
  const dDay = day - 1;
  discountAmount += dDay * 100;
  return discountAmount;
};

export default dDayCalculator;
