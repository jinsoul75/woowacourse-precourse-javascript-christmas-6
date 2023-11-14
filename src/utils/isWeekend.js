const isWeekend = date => {
  const expectedDate = new Date(`2023-12-${date}`);
  const day = expectedDate.getDay();

  return day === 5 || day === 6;
};

export default isWeekend;
