// Algorithms: Pairwise
// Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.

// You may use multiple pairs that have the same numeric elements but different indices. Each pair should use the lowest possible available indices. Once an element has been used it cannot be reused to pair with another element. For instance, pairwise([1, 1, 2], 3) creates a pair [2, 1] using the 1 at indice 0 rather than the 1 at indice 1, because 0+2 < 1+2.

// For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 20 are [7, 13] and [9, 11]. We can then write out the array with their indices and values.

function pairwise(arr, arg) {  
    let sum = 0;

    const indexed = arr.reduce(function (acc, val, i) {
        if (val <= arg) acc.push([val, i]);
        return acc;
    }, []);

    while (indexed.length > 1) {
        let current = indexed.shift();
        let target = arg - current[0];
        let i = 0;
        while (indexed.length > i && indexed[i][0] <= target) {
            if (indexed[i][0] === target) {
                sum += current[1] + indexed.splice(i, 1)[0][1]
            }
            i++;
        }
    }

    return sum;
}
  
console.log(pairwise([1, 3, 2, 4], 4));