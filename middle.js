// Middle function takes in an array, and returns the middle-most element
// For arrays with no middle, return an empty array

const midIndex = (arr) => {
  return Math.floor(arr.length / 2);
};

const middle = (arr) => {
  if (arr.length <= 2) {
    return [];
  }

  if (arr.length % 2 === 0) {
    return [arr[midIndex(arr) - 1], arr[midIndex(arr)]];
  }

  return arr[midIndex(arr)];
};

module.exports = middle


