const assert = require('chai').assert;
const without = require('../without');

const words = ["hello", "lighthouse"];
describe('#without', () => {
  it('return array with a keyword taken out', () => {
    assert.deepEqual(without(words, ["lighthouse"]), ["hello"]);
  });

  it('should return array with unwanted number removed', () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });

  it('should return an array without unwanted numbers, both in string and number form', () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });
});


// without([1, 2, 3], [1]); // => [2, 3]
// without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);