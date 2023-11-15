const isSpecialDay = date => {
  const specialDay = ['3', '10', '17', '24', '25', '31'];
  return specialDay.includes(date);
};

export default isSpecialDay;
