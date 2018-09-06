// This finds the Greatest Common Divisor or GCD

function gcd(x, y) {
    x = Math.abs(x);
    y = Math.abs(y);
    if (y > x) { var temp = x; x = y; y = temp; }
    while (true) {
        if (y == 0) return x;
        x %= y;
        if (x == 0) return y;
        y %= x;
    }
}

// I can use this with reduce to find the GCD of an array

let arr = [270, 192, 3240, 300];

let gcdFromArr = arr.reduce((acc, next) => gcd(acc, next));

console.log(gcdFromArr);

// Alt GCD method using recursion

function gcd2(number1, number2) {
    if (number2 == 0) return number1;
    else {
        let remainder = number1 % number2;
        return gcd(number2, remainder);
    }
}


