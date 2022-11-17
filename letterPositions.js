// This function returns all the indices in the string where each character is found
// Instead of just one number to represent # of occurrences, multiple may beeded to represent 
// all places in the string that it shows up.

const letterPositions = function(sentence) {
  const results = {};

  // logic to update results here
  // for (const letter of sentence) {

  for (let i = 0; i < sentence.length; i++) {

    if (!results[sentence[i]]) {
      results[sentence[i]] = [];
    }

    // For each letter of sentence, push the index of that letter onto the correct key in results
    results[sentence[i]].push(i);
  }

  // }
  return results;
};

console.log(letterPositions("lighthouse"));


// TESTS
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


const helloTest = letterPositions("hello");
assertArraysEqual(helloTest["l"], [2, 3])

