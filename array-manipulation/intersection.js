// Intersection of 2 arrays
arr1.filter(val => arr2.indexOf(val) !== -1);

// Set union of 2 arrays
let union = new Set([...arr1, ...arr2])
