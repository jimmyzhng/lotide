const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

describe('#eqObjects', () => {
  it('should return true with same key value pairs, but in a different order', () => {
    assert.strictEqual(eqObjects(ab, ba), true);
  });

  it('should return false if objects are different', () => {
    assert.strictEqual(eqObjects(ab, abc), false);
  });

  it('should return true if objects are the same, with sub-objects within the objects', () => {
    assert.strictEqual(eqObjects({ a: { y: 0, z: { z: 1, b: 3 }, b: 2 } }, { a: { y: 0, z: { z: 1, b: 3 }, b: 2 } }), true);
  });

  it('should return false if sub-objects are the same, but the key value is different after', () => {
    assert.strictEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { y: 0, z: 1 }, b: 5 }), false);
  });

  it('should return false if objects are different', () => {
    assert.strictEqual(eqObjects({ a: { y: 0, z: { z: 1, b: 3 }, b: 2 } }, { a: { y: 0, z: { z: 1, b: 6 }, b: 2 } }), false);
  });
});
