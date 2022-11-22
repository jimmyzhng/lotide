// itemsToCount: an object specifying what to count
// arr: array of strings that we need to look through
// function should report back how many instances of each string were found in the array
// should be reported back in an object

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

module.exports = countOnly;