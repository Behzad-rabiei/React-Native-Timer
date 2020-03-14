const formatNumber = number => `0${number}`.slice(-2);
export const getRemaining = time => {
  const minutes = Math.floor(time / 60);
  const secondes = time - minutes * 60;
  return {
    minutes: formatNumber(minutes),
    secondes: formatNumber(secondes)
  };
};
