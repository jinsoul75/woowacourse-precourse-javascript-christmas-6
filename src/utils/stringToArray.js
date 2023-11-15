const stringToArray = string => {
  const items = string.replace(/\s/g, '').split(',');

  const resultArray = [];

  items.forEach(item => {
    const [itemName, quentity] = item.split('-');
    resultArray.push([itemName, quentity]);
  });

  return resultArray;
};

export default stringToArray;
