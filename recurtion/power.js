function isEven(n) {
    return n % 2 === 0;
}

function isOdd(n) {
    return !isEven(n);
}

function power(x, n) {
    // base case
    if (n === 0) {
        return 1;
    }
    // recursive case: n is negative
    if (n < 0) {
        const y = power(x, -1 * n);
        return 1 / y;
    }
    // recursive case: n is odd
    if (isOdd(n)) {
        return x * power(x, n - 1);
    }
    // recursive case: n is even
    if (isEven(n)) {
        const y = power(x, n /2);
        return y * y;
    }
}

console.log('3 to the power 0 is', power(3, 0));
console.log('3 to the power 1 is', power(3, 1));
console.log('3 to the power 2 is', power(3, 2));
console.log('3 to the power -1 is', power(3, -1));
console.log('3 to the power 4 is', power(3, 4));
console.log('3 to the power -3 is', power(3, -3));