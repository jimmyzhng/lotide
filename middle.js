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


// Middle function takes in an array, and returns the middle-most element
// For arrays with no middle, return an empty array

const midIndex = (arr) => {
  return Math.floor(arr.length / 2);
};

// console.log(midIndex([1, 2, 3, 4, 5]));

const middle = (arr) => {
  if (arr.length <= 2) {
    return [];
  }

  if (arr.length % 2 === 0) {
    return [arr[midIndex(arr) - 1], arr[midIndex(arr)]];
  }

  return arr[midIndex(arr)];
};

// TEST CODE
console.log(middle([1, 2]));
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4, 5, 6]));

const words = ["hello", "world", "lighthouse"];
middle(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);


