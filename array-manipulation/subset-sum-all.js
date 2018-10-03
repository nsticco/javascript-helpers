// Finds all sums of subsets of an array

function findSubsAll(arr) {
  let subSums = [];
  let sets = [[]];
  arr.map((num, i) => {
    sets.map((set, j) => {
      let curr = set.concat(num);
      sets.push(curr);
      subSums.push(curr.reduce((a,b) => a + b));
    });
  });

  return subSums;   
}

// console.log(findSubsAll([12,11,10,9,8,7,6,5,4,3,2,1]));

// console.log(findSubsAll([1,6,2,5,3,4]));

// console.log(findSubsAll([1,2,3,4]));

console.log(findSubsAll([1,1,1]));


