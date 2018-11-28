/**
 * As we can see that number of operations to do with and array through all its elements to insert
 * Is a arithmetic series (like in the case with a selection sort)
 * But in that case we have a series only up to n - 1 (we starting from the index 1)
 * And the final formula is c*(n - 1 + 1)*((n - 1)/ 2) = c*n^2/2 - c*n/2
 * Where c is a constant (number of line of code to invoke during one insert action)
 * Using big-Theta notation, we discard the low-order term c*n/2 and the constant
 * factors c and 1/2, getting the result that the running time of insertion sort, in
 * this case, is Θ(n^2)
 * The reversed-sorted array is the worst case
 * And the most positive cases when every element is greater than or equal to every element to its left,
 * or the array is almost sorted,
 * the running time of insertion sort is Θ(n)
 * The running time in the average will be still as a worst case.
 * Summary:
 * Worst case: Θ(n^2)
 * Best case: Θ(n)
 * Average case for a random array: Θ(n^2)
 * "Almost sorted" case: Θ(n).
 */
function insertionSort3(arr) {
    const insert = (arr, index1, index2) => {
        [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    };

    for (let i = 1; i < arr.length; i++) {
        let j = i - 1;

        while (j >= 0 && arr[j] > arr[j + 1]) {
            insert(arr, j, j + 1);
            j--;
        }
    }

    return arr;
}

console.log(insertionSort3([2, 1, 9, 76, 4]));
console.log(insertionSort3([22, 11, 99, 88, 9, 7, 42]));
console.log(insertionSort3([22, 11, 99, 88, 9, 7, 42, 0, 15, -1]));