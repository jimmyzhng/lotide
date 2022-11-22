// This function returns all the indices in the string where each character is found
// Instead of just one number to represent # of occurrences, multiple may needed to represent 
// all places in the string that it shows up.

const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {

    if (!results[sentence[i]]) {
      results[sentence[i]] = [];
    }

    // For each letter of sentence, push the index of that letter onto the correct key in results
    results[sentence[i]].push(i);
  }

  return results;
};

module.exports = letterPositions

