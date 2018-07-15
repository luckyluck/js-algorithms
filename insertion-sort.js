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

/**
 * Inserted a value into the sorted sub-array of a given array
 * @param array - initial array
 * @param rightIndex - index to start check from
 * @param value - value to insert
 */
function insert(array, rightIndex, value) {
    // Going from right to left sliding elements which is bigger than current key (array[i])
    let j;
    for(j = rightIndex; j >= 0 && array[j] > value; j--) {
        array[j + 1] = array[j];
    }
    // Putting key into the emptied space
    array[j + 1] = value;
}

/**
 * Insertion sort
 * @param array - unsorted array
 */
function insertionSort(array) {
    const l = array.length;

    // Iterating through array starting from index 1 (to be able to slide)
    for (let i = 1; i < l; i++) {
        insert(array, i - 1, array[i]);
    }
}

const array = [22, 11, 99, 88, 9, 7, 42];
insertionSort(array);
console.log(array);

const array2 = [22, 11, 99, 88, 9, 7, 42, 0, 15, -1];
insertionSort(array2);
console.log(array2);