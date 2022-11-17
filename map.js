// Our map function takes in two arguments
// An array to map, a callback function
// Returns a new array based on the callback function

//Map calls the callBack to each element of the array

const map = (arr, callBack) => {
  const mapped = [];

  for (let element of arr) {
    mapped.push(callBack(element));
  }

  return mapped;
};

// Tests
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);

// AssertArraysEqual tests
const eqArrays = (arr1, arr2) => {

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }

  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    return console.log(`✅✅✅ Assertion Passed. ${arr1} === ${arr2}`);
  }

  console.log(`🛑🛑🛑 Assertion Failed. ${arr1} !== ${arr2}`);
};

assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(map([0, 1, 2, 3], num => num + 1), [1, 2, 3, 4]);