// requires npm install mathjs
const math = require('mathjs');

module.exports = karatsuba;

function karatsuba(x, y) {
  // Convert nums to strings and get lengths
  let xstr = math.format(x, {notation: 'fixed'});
  let ystr = math.format(y, {notation: 'fixed'});
  let xlen = xstr.length;
  let ylen = ystr.length;

  // n is minimum length between x and y, m is half rounded up
  let n = Math.min(xlen, ylen);
  let m = Math.round(n / 2);

  // base case
  if (n === 1) {
    return x * y;
  }

  // Set a, b to 1st, 2nd halves of x
  let a = Number(xstr.slice(0, xlen - m));
  let b = Number(xstr.slice(xlen - m));

  // Set c, d to 1st, 2nd halves of y
  let c = Number(ystr.slice(0, ylen - m));
  let d = Number(ystr.slice(ylen - m));

  // compute values for Katsuraba's algorithm
  let p = a + b;
  let q = c + d;
  let ac = karatsuba(a, c);
  let bd = karatsuba(b, d);
  let pq = karatsuba(p, q);
  let adbc = pq - ac - bd; 

  return Math.pow(10, 2 * m) * ac + Math.pow(10, m) * (adbc) + bd;

}

let num1 = 3141592653589793238462643383279502884197169399375105820974944592;
let num2 = 2718281828459045235360287471352662497757247093699959574966967627;

karatsuba(num1, num2);