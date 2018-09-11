// Finds all subarrays of a given array adding up to a target value

function findSubs(arr, target) {
  let solutions = [];
  let sets = [[]];

  // For each index, we consider possible solutions involving that number 
  arr.map((num, i) => {
    // We loop over existing solutions to see if they work when we add that number
    sets.map((set, j) => {
      let curr = set.concat(num);
      sets.push(curr);
      let sum = curr.reduce((a,b) => a + b);
      // If the sum matches out target, we include that solution
      if (sum === target) solutions.push(curr);
    });
  });

  return solutions;   
}

// console.log(findSubs([12,11,10,9,8,7,6,5,4,3,2,1], 12));

console.log(findSubs([1,6,2,5,3,4], 7));

// console.log(findSubs([1,2,3,4], 5));


