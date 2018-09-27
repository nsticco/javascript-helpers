// Import function modules here
var generateRange = require('../array-manipulation/generate-range');
var insertionSort = require('../fcc/sort-insertion'); // two functions imported
var randNumArr = require('../array-manipulation/random-number-array');

// Set input parameters here
let input1 = randNumArr(50000, 50000);
let input2 = input1.slice();

// Timer start
let t0 = Date.now();

// Run function
let result = insertionSort(input1);

// Timer finish
let t1 = Date.now();
console.log('Took', (t1 - t0).toFixed(4), 'milliseconds for process to complete');


