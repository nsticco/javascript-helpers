// Generates a range of numbers between the inputs regardless of order

function generateRange(arr) {
    let high = Math.max(...arr);
    let low = Math.min(...arr);
    let range = [];
    while (low <= high) {
        range.push(low++);
    }
    return range;
}

module.exports = generateRange;

// Examples:
// console.log(generateRange([1, 5]));
// console.log(generateRange([23, 18]));