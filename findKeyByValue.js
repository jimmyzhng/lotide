// findKeyByValue takes in an object and a value. It returns first key which contains the given value
// If none of given is found, it returns undefined

const findKeyByValue = (obj, value) => {

  // We check if any of the keys contain our given value
  for (const key in obj) {
    if (obj[key] === value) {
      return key;
    }
  }

  return undefined;
};

// TESTS

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed. ${actual} === ${expected}`);
  }

  console.log(`🛑🛑🛑 Assertion Failed. ${actual} !== ${expected}`);
};

// Given test
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

// More tests

const bestVideoGamesByGenre = {
  FPS: "Valorant",
  MOBA: "League of Legends",
  MMORPG: "Runescape"
};

assertEqual(findKeyByValue(bestVideoGamesByGenre, "Runescape"), "MMORPG");
assertEqual(findKeyByValue(bestVideoGamesByGenre, "CSGO"), undefined);