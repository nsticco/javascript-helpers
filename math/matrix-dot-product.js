// Given two matrices, a and b, find their dot product

function getMatrixProduct(a, b) {
  // a's number of columns must equal b's number of rows and can't be 0
  // this number will also determine the number of multiplications per element
  let rowsB = b.length;
  if (rowsB !== a[0].length || !rowsB) return -1;

  // We iterate through by output row, output col, multiplications per element
  let rowsA = a.length;
  let colsB = b[0].length;
  let c = [];
  for (let i = 0; i < rowsA; i++) {
    c.push([]);
    for (let j = 0; j < colsB; j++) {
    let element = 0;
      for (let k = 0; k < rowsB; k++) {
        element += a[i][k] * b[k][j]
      }
    c[i].push(element);    
    }
  }

  return c;
}