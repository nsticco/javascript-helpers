// Import function modules here
// var generateRange = require('../array-manipulation/generate-range');
// var insertionSort = require('../fcc/sort-insertion'); // two functions imported
var quickSort = require('../fcc/sort-quick');
var mergeSort = require('../fcc/sort-merge-immutable');
var randNumArr = require('../array-manipulation/random-number-array');
var insertionSort = require('../fcc/sort-insertion');

// Set input parameters here
// let input1 = randNumArr(100000, 500);
// let input2 = input1.slice();


// Timer start
let t0 = Date.now();

// Run function
let result = quickSort(input1);
// let result = insertionSort(input1);

// Timer finish
let t1 = Date.now();
console.log('Took', (t1 - t0).toFixed(4), 'milliseconds for process to complete');
