const { assert } = require('chai');
const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

describe('#eqArrays', () => {
  it('should return true if arrays are the same', () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

  it('should return true if arrays are the same, with sub-arrays', () => {
    assert.strictEqual(eqArrays([1, 2, [3]], [1, 2, [3]]), true);
  });

  it('should return false if arrays are the different, with sub-arrays', () => {
    assert.strictEqual(eqArrays([1, 2, [3]], [1, 2, [2]]), false);
  });
});
