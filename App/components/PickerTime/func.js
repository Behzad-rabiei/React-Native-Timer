const createArray = length => {
  const arr = [];
  for (let i = 0; i < length; i += 1) {
    arr.push(i);
  }
};
export const AVAILABLE_SECONDS = createArray(60);
export const AVAILABLE_MINUTES = createArray(10);
