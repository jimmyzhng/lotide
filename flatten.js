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

// Flatten function: takes in an array containing elements, including nested arrays of elements,
// and return a flattened version of the array

function flatten(array) {
  let result = [];

  for (let i = 0; i < array.length; i++) {

    if (Array.isArray(array[i])) {
      result = result.concat(flatten(array[i]));
    } else {
      result.push(array[i]);
    }
  }
  return result;
}


console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]