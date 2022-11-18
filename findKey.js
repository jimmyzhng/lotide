// findKey scans the object, and returns the first key for which the cb returns a truthy
// if none, return undefined

const findKey = (obj, cb) => {
  for (let key in obj) {

    if (cb(obj[key])) {
      return key;
    }
  }

};


// Test
console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2));
// => "noma"


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed. ${actual} === ${expected}`);
  }

  console.log(`🛑🛑🛑 Assertion Failed. ${actual} !== ${expected}`);
};

assertEqual(findKey({ 1: 2, 3: 4, 5: 6 }, x => x === 4), "3");
assertEqual(findKey({
  1: { 2: 3, 4: [5, 6, 7], 8: 9 },
  10: 11,
  12: { 13: 14, 15: 16 }
}, x => x[13] === 14), "12");