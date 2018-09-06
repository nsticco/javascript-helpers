// Efficient Least Common Multiple solution using greatest common divisor:
// The least common multiple (lcm) of a and b is their product 
// divided by their greatest common divisor (gcd)

function lcm(a, b) {
    return a * b / gcd(a, b);
}

function gcd(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    if (b > a) { var temp = a; a = b; b = temp; }
    while (true) {
        if (b == 0) return a;
        a %= b;
        if (a == 0) return b;
        b %= a;
    }
}

function gcd2(number1, number2) {
    if (number2 == 0) return number1;
    else {
        let remainder = number1 % number2;
        return gcd(number2, remainder);
    }
}

// For more than 2, we can use reduce to re-use this function

function lcmMany(arr) {
    return arr.reduce((acc, next) => lcm(acc, next));
}

// Example:
console.log(lcmMany([2, 7, 3, 9, 4]));



// Basic Least Common Multiple solution

function leastCommonMultiple(arr) {
    let high = Math.max(...arr);
    let lcm = high;
    while (!range.every(n => lcm % n === 0)) {
      lcm += high;
    }
    return lcm;
}