const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed. ${actual} === ${expected}`);
  }

  console.log(`🛑🛑🛑 Assertion Failed. ${actual} !== ${expected}`);
};

const eqArrays = (arr1, arr2) => {

  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }

  }
  return true;
};

// Our eqObjects function:
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {

  // Are the object lengths equal?
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  // If that passes, we can test each key value pair
  for (let key1 in object1) {

    for (let key2 in object2) {
      let value1 = object1[key1];
      let value2 = object2[key2];
      // console.log("key1:", key1);
      // console.log("value1:", value1,);
      // console.log("key2:", key2);
      // console.log("value2:", value2,);

      // if keys are the same, and the key values are the same
      // also, if the key is an array, we use eqArray
      // console.log(`Key 1 of ${object1}: ${key1}, Key 2 of ${object2}: ${key2}`);
      if (key1 === key2) {
        // If the key is an array, we eqArray
        if (Array.isArray(value1) && Array.isArray(value2)) {
          // console.log(eqArrays(value1, value2));
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



//Tests
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// console.log("Test 1: ab and ba, should return true");
// console.log(eqObjects(ab, ba));


// const abc = { a: "1", b: "2", c: "3" };
// console.log("Test 2: ab and abc, should return false");
// console.log(eqObjects(ab, abc));

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc));
// => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2))
// => false