const assert = require('chai').assert;
const countOnly = require('../countOnly');


const firstNames = ["Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

describe('#countOnly', () => {
  it('returns 1 instance of Jason being counted in the array', () => {
    assert.strictEqual(result1["Jason"], 1);
  });

  describe('#countOnly', () => {
    it('returns undefined if name is not in array', () => {
      assert.strictEqual(result1["Karima"], undefined);
    });
  });

  describe('#countOnly', () => {
    it('returns 2 if name is found twice in array', () => {
      assert.strictEqual(result1["Fang"], 2);
    });
  });

  describe('#countOnly', () => {
    it('returns undefined if name is false in list of names to count', () => {
      assert.strictEqual(result1["Agouhanna"], undefined);
    });
  });

});
