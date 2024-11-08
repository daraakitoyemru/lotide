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

const tail = function (list) {
  newList = list.slice(1);
  return newList;
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);
