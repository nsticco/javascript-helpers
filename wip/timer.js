// Import function module here
var generateRange = require('./array-manipulation/generateRange')

function funcToTime(...args) {
    const setArrs = args.map(arr => [...new Set(arr)]);
    return setArrs.reduce((acc, next) => acc.filter(x => !next.includes(x))
                                .concat(next.filter(y => !acc.includes(y))));            
  }

// Set parameters here
let input = (new Set(generateRange([0, 100000])), new Set(generateRange([50000, 150000])), new Set(generateRange([100000, 200000])))

let range = generateRange([0, 1000000])

// Timer below
let t0 = Date.now();
// let result = funcToTime(input);

let t1 = Date.now();
console.log('Took', (t1 - t0).toFixed(4), 'milliseconds for process to complete');
