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

// Without function: returns a subset of an array, removing unwanted elements
const without = (arr, unwanted) => {
  let newArr = arr;

  for (let i = 0; i < newArr.length; i++) {

    for (let j = 0; j < unwanted.length; j++) {

      if (newArr[i] === unwanted[i]) {
        newArr.splice(i, 1);
      }
    }
  }
  console.log(newArr);
};

without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);


