// findKeyByValue takes in an object and a value. It returns first key which contains the given value
// If none of given is found, it returns undefined

const findKeyByValue = (obj, value) => {

  for (const key in obj) {
    if (obj[key] === value) {
      return key;
    }
  }

  return undefined;
};

module.exports = findKeyByValue;