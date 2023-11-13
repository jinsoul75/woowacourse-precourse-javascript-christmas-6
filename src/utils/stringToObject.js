const stringToObject = string => {
  const items = string.replace(/\s/g, '').split(',');

  const resultObject = {};

  items.forEach(item => {
    const [itemName, quentity] = item.split('-');
    resultObject[itemName] = quentity;
  });

  return resultObject;
};

export default stringToObject;
