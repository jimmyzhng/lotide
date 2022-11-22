// Our map function takes in two arguments
// An array to map, a callback function
// Returns a new array based on the callback function

// Map calls the callBack to each element of the array

const map = (arr, callBack) => {
  const mapped = [];

  for (let element of arr) {
    mapped.push(callBack(element));
  }

  return mapped;
};

module.exports = map;