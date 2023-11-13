export const getSecondLevelKeys = array => {
  return array.flatMap(category => Object.keys(category));
};

export const getSecondLevelValues = obj => {
  return Object.values(obj).flatMap(category => Object.values(obj[category]));
};
