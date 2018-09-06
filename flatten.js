// Option for flattening an array by one level

function flatten(arr) {
    return arr.reduce( (acc, val) => acc.concat(val), []);
}

// Option for flattening multiple levels

function flattenDeep(arr) {
    return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
 }

// Examples:

arr = [[1,2,3], 4, [5,6], [[7,8], [9]]];

console.log("One level flatten:", flatten(arr));
console.log("Deep flatten:", flattenDeep(arr));