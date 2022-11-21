const assertEqual = require('../assertEqual');
const tail = require('../tail');

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
assertEqual(tail(words).length, 2);
