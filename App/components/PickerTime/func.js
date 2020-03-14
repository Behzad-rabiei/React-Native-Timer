const createArray = length => {
  const arr = [];
  for (let i = 0; i < length; i += 1) {
    arr.push(i.toString());
  }
  return arr;
};
export const AVAILABLE_ITEMS = createArray(60);
