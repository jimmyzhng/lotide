const middle = require('../middle');
const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');


// TEST CODE

const words = ["hello", "world", "lighthouse"];
const wordsEven = ["hello", "world", "lighthouse", "labs"];
assertArraysEqual(middle([]), []);
assertArraysEqual(middle(words), "world");
assertArraysEqual(middle(wordsEven), ["world", "lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);