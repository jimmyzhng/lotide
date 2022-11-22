const letterPositions = require('../letterPositions');
const assert = require('chai').assert;

const helloTest = letterPositions("hello");
const empty = letterPositions("");

describe('#letterPositions', () => {
  it("returns true if properly identifies the positioning of letters within a string", () => {
    assert.deepEqual(helloTest["l"], [2, 3]);
  });

  it("returns empty object if used on an empty string", () => {
    assert.deepEqual(empty, {});
  });
});


