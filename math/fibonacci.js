// Return fibonacci value after x iterations (while loop is fastest)

function fib(num) {
    let a = 1, b = 0, temp;
    while (num >= 0) {
        temp = a;
        a = a + b;
        b = temp;
        num--;
    }
    return b;
}

// Return fibonacci value after x more iterations from starting values

function fibNext(num, last1=1, last2=0) {
    let temp;
    while (num >= 0) {
        temp = last1;
        last1 = last1 + last2;
        last2 = temp;
        num--;
    }
    return last2;
}

// Examples

let i = 10;
console.log("Num: " + i + ", Fib: " + fibNext(i));
console.log("Num: " + (i+1) + ", Fib: " + fibNext(i+1));
console.log("Num: " + (i+2) + ", Fib: " + fibNext(1, fibNext(i+1), fibNext(i)));

// Return first x fibonacci values (recursive version)

function fibRec(num, memo={}) {
    if (memo[num]) return memo[num];
    if (num <= 1) return 1;

    return memo[num] = fibRec(num - 1, memo) + fibRec(num - 2, memo);
}

// Sum odd fibonacci values less than or equal to num

function sumFibs(num) {
    let curr = 1, sum = 0, memo = {};
    while (curr <= num) {

    }
    if (num === 0) return 0;
    else if (num === 1) return 1;
    return 

    while (cnt > 0) {
        
    }
}

