const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

const bestVideoGamesByGenre = {
  FPS: "Valorant",
  MOBA: "League of Legends",
  MMORPG: "Runescape"
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

describe('#findKeyByValue', () => {
  it('finds key from given string value', () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it('returns undefined if not found', () => {
    assert.strictEqual(findKeyByValue(bestVideoGamesByGenre, "CSGO"), undefined);
  });
});
