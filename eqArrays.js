const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed. ${actual} === ${expected}`);
  }

  console.log(`🛑🛑🛑 Assertion Failed. ${actual} !== ${expected}`);
};

// Function that takes 2 ararys, returning boolean based on perfect match

const eqArrays = (arr1, arr2) => {

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }

  }
  return true;
};


// Test
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
