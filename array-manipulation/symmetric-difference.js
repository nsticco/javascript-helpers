// Symmetric difference solution for two sets
let symPair = (s1, s2) => new Set([...s1,...s2].filter(x=>s1.has(x)^s2.has(x)))

// Symmetric difference solution for unknown number of arrays
function sym(...args) {
  //Turn arrays into sets
  const sets = args.map(arr => new Set(arr));
  // Function for symmetric difference on two sets
  const symPair = (s1, s2) => new Set([...s1,...s2].filter(x=>s1.has(x)^s2.has(x)))
  // Reduce along with symPair computes difference for all sets and returns array
  return [...(sets.reduce((acc, next) => symPair(acc, next)))];
}

console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]));