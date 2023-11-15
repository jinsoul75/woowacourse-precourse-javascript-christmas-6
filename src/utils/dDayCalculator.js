import NUMBERS from '../constants/numbers/numbers.js';

const dDayCalculator = day => {
  let discountAmount = NUMBERS.dDayDiscountStandardAmount;
  const dDay = day - 1;
  discountAmount += dDay * NUMBERS.dDayDiscountAmount;
  return discountAmount;
};

export default dDayCalculator;
