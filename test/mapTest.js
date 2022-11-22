const map = require('../map');
const assert = require('chai').assert;

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);

describe('#map', () => {
  it('returns the first letter of each element on an array', () => {
    assert.deepEqual(results1, ['g', 'c', 't', 'm', 't']);
  });

  it('returns numbers in an array with correct mapping', () => {
    assert.deepEqual(map([0, 1, 2, 3], num => num + 1), [1, 2, 3, 4]);
  });
});