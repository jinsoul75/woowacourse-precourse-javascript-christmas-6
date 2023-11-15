const getSecondLevelKeys = array => {
  return array.flatMap(category => Object.keys(category));
};

export default getSecondLevelKeys;
