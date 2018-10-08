// Generates an array of the diagonal values (in arrays) of a square matrix

let input = [
  [ 11, 12, 13, 14 ],
  [ 21, 22, 23, 24 ],
  [ 31, 32, 33, 34 ],
  [ 41, 42, 43, 44 ]
];

function diagonals(matrix) {
  let size = matrix.length;
  let arr = [];
  
  for (let i = 0; i < size; i++) {
    let a = [], b = [], c = [], d = [];
    for (let j = 0; j < size-i; j++) {
      a.push(matrix[j][j+i])
      b.push(matrix[j+i][j])
      c.push(matrix[j][size-i-j-1])
      d.push(matrix[j+i][size-j-1]) 
    }
    if (i === 0) {
      arr.push(a, c);
    } else {
      arr.push(a, b, c, d);
    }
  }

  return arr;
}

console.log(diagonals(input));