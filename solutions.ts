const multiplyValue = (value: number, multiplier: number = 2): number => {
  if (multiplier === 0) {
    return value * 0;
  }
  return value * multiplier;
};
