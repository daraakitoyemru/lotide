const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(
      `🟢🟢🟢 Assertion Passed \nactual: ${actual}\nexpected: ${expected}`
    );
    return true;
  }
  console.error(
    `🔴🔴🔴 Assertion Failed \nactual: ${actual}\nexpected: ${expected}`
  );
};

const head = function (list) {
  const head = list.shift();
  return head;
};

assertEqual(head([1, 2, 3]), 1);
