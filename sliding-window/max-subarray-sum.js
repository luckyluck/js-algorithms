/**
 * Function accepts an array of integers and a number called n
 * The function will calculate the maximum sum of n consecutive elements in the array
 * @param arr
 * @param n
 */
function maxSubarraySum1(arr, n) {
    if (n > arr.length) return null;

    let max = -Infinity;
    for (let i = 0; i < arr.length - n + 1; i++) {
        let temp = 0;

        for (let j = 0; j < n; j++) {
            temp += arr[i + j];
        }

        if (temp > max) {
            max = temp;
        }
    }

    return max;
}

console.log(maxSubarraySum1([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubarraySum1([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubarraySum1([4, 2, 1, 6], 1)); // 6
console.log(maxSubarraySum1([4, 2, 1, 6, 2], 4)); // 13
console.log(maxSubarraySum1([], 4)); // null

/**
 * Function accepts an array of integers and a number called n
 * The function will calculate the maximum sum of n consecutive elements in the array
 * @param arr
 * @param n
 */
function maxSubarraySum2(arr, n) {
    if (arr.length < n) return null;

    let maxSum = 0;
    let tempSum = 0;

    for (let i = 0; i < n; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = n; i < arr.length; i++) {
        tempSum = tempSum - arr[i - n] + arr[i];
        maxSum = Math.max(tempSum, maxSum);
    }

    return maxSum;
}

console.log(maxSubarraySum2([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubarraySum2([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubarraySum2([4, 2, 1, 6], 1)); // 6
console.log(maxSubarraySum2([4, 2, 1, 6, 2], 4)); // 13
console.log(maxSubarraySum2([], 4)); // null