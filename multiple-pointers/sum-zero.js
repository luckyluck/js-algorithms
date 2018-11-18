/**
 * Function accepts a SORTED array of integers
 * and searching first pair where the sum is 0
 *
 * returns an array with both numbers or undefined if a pair does not exist
 */
function sumZero(arr) {
    let left = 0;
    let right = arr.length -1;

    while(left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}

console.log(sumZero([-4, -3, -2, 0, 1, 2, 5]));
console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10]));
console.log(sumZero([-4, -3, 0, 1, 2, 5, 10]));