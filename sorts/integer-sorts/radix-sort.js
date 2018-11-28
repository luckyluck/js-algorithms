/**
 * Returns the digit in num at the given place value
 * @param num - given number
 * @param place - required place/position
 */
function getDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

/**
 * Return the number of digits in num
 * @param num - given number
 */
function digitCount(num) {
    if (num === 0) return 1;

    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

/**
 * Returns the number of digits in the largest number in the array/list
 * @param nums - given array of numbers
 */
function mostDigits(nums) {
    let maxDigits = 0;

    for (const num of nums) {
        maxDigits = Math.max(maxDigits, digitCount(num));
    }

    return maxDigits;
}

/**
 * Sorts numbers using Radix Sort algorithm
 * Has a Ω(nk) best/worst/average Time Complexity
 * Has a worse O(n+k) Space Complexity
 * * n - length of array
 * * k - number of digits in the longest number
 * @param nums - array of numbers
 */
function radixSort(nums) {
    const maxDigitCount = mostDigits(nums);

    for (let k = 0; k < maxDigitCount; k++) {
        // Creating 0-9 buckets as array of arrays
        let digitBuckets = Array.from({ length: 10 }, () => []);

        for (let i = 0; i < nums.length; i++) {
            const digit = getDigit(nums[i], k);
            digitBuckets[digit].push(nums[i]);
        }
        // Putting numbers from buckets back to original array
        // in the order they were put into the buckets
        nums = [].concat(...digitBuckets);
    }

    return nums;
}

console.log(radixSort([23, 345, 5467, 12, 2345, 9852]));
console.log(radixSort([23, 345, 5467, 12, 2345, 9852, 1, 75, 3, 7, 0, 111]));