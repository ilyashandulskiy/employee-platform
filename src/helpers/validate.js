export default {
  numberBetween(min, max) {
    return (val) => (+val >= min && +val <= max);
  },
  numberBetweenOptional(min, max) {
    return (val) => (+val >= min && +val <= max) || !val;
  },
};
