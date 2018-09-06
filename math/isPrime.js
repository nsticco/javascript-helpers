// Basic isPrime checker

function isPrime(num) {
    if (num % 2 === 0 && num !== 2) return false;
    for (let i = 3; i < num; i += 2) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}

// Sieve of Erasthones solution

function isPrimeSieve(n) {
    let primes = {};
    let nroot = Math.sqrt(n);
    for (let i = 2; i < nroot; i++) {
        if (primes[i] !== false) {
            for (let j = i*i; j <= n; j += i) {
                primes[j] = false;
            }
            if (primes[n] === false) return false;
        }
    }
    return true;
}

// Sum all primes up to and including n

function sumPrimes(n) {
    let primes = {};
    for (let i = 2; i <= n; i++) {
        primes[i] = true;
    }

    let nroot = Math.sqrt(n);
    for (let i = 2; i < nroot; i++) {
        if (primes[i] !== false) {
            for (let j = i*i; j <= n; j += i) {
                primes[j] = false;
            }
        }
    }

    return Object.entries(primes).reduce((acc, [k, v]) => v === true ? acc + Number(k) : acc, 0);
}

// Example should return 17
console.log(sumPrimes(10));

// Example should return 73156
console.log(sumPrimes(977));