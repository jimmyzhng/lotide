// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed. ${actual} === ${expected}`);
  }

  console.log(`🛑🛑🛑 Assertion Failed. ${actual} !== ${expected}`);
};

// allItems: array of strings that we need to look through
// itemsToCount: an object specifying what to count
// funtion should report back how many instancse of each string were found in the allItems
// should be reported back in an object

// let countOnly = function(allItems, itemsToCount) {
//   const results = {};

//   for (const item of allItems) {

//     if (itemsToCount[item]) {

//       if (results[item]) {
//         results[item] += 1;

//       } else {
//         results[item] = 1;
//       }
//     }

//     // console.log(results);
//   }

//   return results;
// };

// Lecture 
let countOnly = (arr, itemsToCount) => {
  const results = {};

  // Filter
  for (const item of arr) {

    // Filter
    if (!itemsToCount[item]) {
      continue;
    }

    if (!results[item]) {
      results[item] = 0;
    }

    results[item]++;
  }
  return results;
};

// TEST CODE

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

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);