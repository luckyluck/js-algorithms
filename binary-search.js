const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

function binarySearch(array, target) {
    let min = 0;
    let max = primes.length - 1;
    let guess;
    let numberOfGuesses = 0;

    while (min <= max) {
        guess = Math.floor((min + max) / 2);
        numberOfGuesses++;

        if (array[guess] === target) {
            console.log(`the number was guessed after ${numberOfGuesses} attempts`);
            return guess;
        } else if (array[guess] < target) {
            min = guess + 1;
        } else {
            max = guess - 1;
        }
    }

    return -1;
}

console.log(binarySearch(primes, 67));
console.log(binarySearch(primes, 10));
console.log(binarySearch(primes, 73));