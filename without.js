// Without function: returns a subset of an array, removing unwanted elements
const without = (arr, unwanted) => {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {

    for (let j = 0; j < unwanted.length; j++) {

      if (arr[i] === unwanted[j]) {
        arr.splice(i, 1);
      }
    }
  }
  return arr;
};

module.exports = without


