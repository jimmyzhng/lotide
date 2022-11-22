const assert = require('chai').assert;
const tail = require('../tail');

// Test Case
const words = ["Yo Yo", "Lighthouse", "Labs"];

describe("#tail", () => {
  it("should return true if tail removes the first element of the array", () => {
    assert.deepEqual(tail(words), ["Lighthouse", "Labs"]);
  });
});
