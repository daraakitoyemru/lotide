const assertEqual = function (actual, expected) {
  if (actual === expected) {
    return true;
  }
  console.error(
    `🔴🔴🔴 Assertion Failed \nactual: ${actual}\nexpected: ${expected}`
  );
};

assertEqual(1, 2);
