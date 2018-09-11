// This was built for a code challenge to find all the ways we can evenly divide an array into thirds by value

function findSubs(arr, target) {
  let solutions = [];
  let sets = [[]];

  // For each index, we consider possible solutions involving that number 
  arr.map((num, i) => {
    // We loop over existing solutions to see if they work when we add that number
    sets.map((set, j) => {
      let curr = set.concat([[i, num]]);
      sets.push(curr);
      let sum = curr.map(x => x[1]).reduce((acc, next) => acc + next, 0);
      // If the sum matches out target, we include that solution
      if (sum === target) solutions.push(curr);
    });
  });

  return solutions;   
}

function solve(a) {
  // We want our triplets to add up to a third of the total sum
  let third = a.reduce((acc, next) => acc + next) / 3;
  let tsets1 = findSubs(a, third); 
  let count = 0;

  console.log("tsets1:", tsets1);

  const checkSet = (set, i2drop) => {
    if (set.some(x => i2drop.includes(x[0]))) return false;
    else return true;
  }

  tsets1.map((s1, i) => {
    // Calculate options sans s1
    let s1i = s1.map(x => x[0]);
    let tsets2 = tsets1.filter(y => checkSet(y, s1i));

    tsets2.map((s2, j) => {
      // Calculate options sans s2
      let s2i = s2.map(x => x[0]);
      let tsets3 = tsets2.filter(z => checkSet(z, s2i));

      tsets3.map((s3) => {
        console.log("s1:", s1, "s2", s2, "s3", s3)
        count++;
      });
    });
  });

  console.log(count);
  return count;
}

solve([1,2,1,2,1,2]);



