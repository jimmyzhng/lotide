const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed. ${actual} === ${expected}`);
  }

  console.log(`🛑🛑🛑 Assertion Failed. ${actual} !== ${expected}`);
};

const countLetters = (str) => {
  const obj = {};

  for (const letter of str) {

    if (letter !== " ") {

      if (obj[letter]) {
        obj[letter] += 1;

      } else {
        obj[letter] = 1;
      }
    }

  }
  return obj;
};

// Tests
console.log(countLetters("lighthouse in the house"));

const result1 = countLetters("lighthouse in the house");
assertEqual(result1["l"], 1);
assertEqual(result1["i"], 2);
assertEqual(result1["g"], 1);
assertEqual(result1["m"], undefined);
assertEqual(result1["a"], undefined);

