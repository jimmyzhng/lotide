// Function takes in array to work with, and the callback (Lodash calls predicate)
// Function returns an array, with a 'slice with elements taken from the beginning'
// It will continue taking them away, until the cb returns a truthy value
const takeUntil = (arr, cb) => {
  const output = [];

  for (const element of arr) {

    if (cb(element)) {
      return output;
    } else output.push(element);
  }
};


// Tests

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

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

assertArraysEqual((takeUntil([1, 2, 3, 4, 5], x => x === 5)), [1, 2, 3, 4]);
assertArraysEqual((takeUntil([1, 3, 5, 69, 4, 6, 7, 7], x => x % 2 === 0)), [1, 3, 5, 69]);