/**
 * This is a recursive implementation of a function to count factorials
 * @param n - bigger or equal to 0 number
 * @returns {number} - factorial of the given number
 */
function factorial(n) {
    if (n < 0) {
        throw new Error('n should be a positive number bigger or equal to 0');
    }
    // base case
    if (n <= 1) {
        return 1;
    }
    // To solve a problem, solve a subproblem that is a smaller instance of the same problem,
    // and then use the solution to that smaller instance to solve the original problem.
    return n * factorial(n - 1);
}

console.log('0!:', factorial(0));
console.log('5!:', factorial(5));
console.log('6!:', factorial(6));
console.log('10!:', factorial(10));
console.log('-1!:', factorial(-1));