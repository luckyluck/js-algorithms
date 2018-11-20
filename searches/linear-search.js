/**
 *
 * @param arr
 * @param value
 * @returns {number}
 */
function linearSearch(arr, value) {
    const l = arr.length;

    for (let i = 0; i < l; i++) {
        if (arr[i] === value) {
            return i;
        }
    }

    return -1;
}

const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
console.log(linearSearch(primes, 67));
console.log(linearSearch(primes, 10));
console.log(linearSearch(primes, 73));