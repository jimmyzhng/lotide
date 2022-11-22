const middle = require('../middle');
const assert = require('chai').assert;

// TEST CODE

const words = ["hello", "world", "lighthouse"];
const wordsEven = ["hello", "world", "lighthouse", "labs"];

describe('#middle', () => {
  it('should return empty array if given empty array', () => {
    assert.deepEqual(middle([]), []);
  });

  it('should return element of the middle index (odd length)', () => {
    assert.deepEqual(middle(words), "world");
  });

  it('should return two middle-most elements (even length)', () => {
    assert.deepEqual(middle(wordsEven), ["world", "lighthouse"]);
  });

});
