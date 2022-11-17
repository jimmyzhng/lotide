//EqObjects function

const eqObjects = function(object1, object2) {

  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (let key1 in object1) {

    for (let key2 in object2) {
      let value1 = object1[key1];
      let value2 = object2[key2];

      if (key1 === key2) {

        if (Array.isArray(value1) && Array.isArray(value2)) {

          if (!eqArrays(value1, value2)) {
            return false;
          }
        } else if (value1 !== value2) {
          return false;
        }
      }
    }
  }

  return true;
};


// assertObjectsEqual

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    return console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  }

  console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};

// Test
assertObjectsEqual({ a: 1, b: 2, c: 3 }, { a: 1, b: 2, c: 3 });
assertObjectsEqual({ a: 1, b: 2, c: 3 }, { a: 69 });
assertObjectsEqual({ a: 1, b: 2, c: 3 }, { a: 1, b: 2, c: 4 });