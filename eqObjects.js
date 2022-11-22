// Our eqObjects function:
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const eqObjects = function(object1, object2) {

  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (let key1 in object1) {

    const value1 = object1[key1];
    const value2 = object2[key1];

    if (Array.isArray(value1) && Array.isArray(value2) && !eqArrays(value1, value2)) {
      return false;

    } else if (typeof value1 === 'object' && typeof value2 === 'object') {
      if (!eqObjects(value1, value2)) {
        return false;
      }

    } else if (value1 !== value2) {
      return false;

    }
  };

  return true;
};

module.exports = eqObjects



