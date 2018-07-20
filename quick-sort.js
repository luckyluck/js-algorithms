// Swaps two items in an array, changing the original array
function swap(array, firstIndex, secondIndex) {
    const temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}

// This function partitions given array and returns
//  the index of the pivot.
function partition(array, p, r) {
    let q = p;
    // Compare array[j] with array[r], for j = p, p+1,...r-1 maintaining that:
    //  array[p..q-1] are values known to be <= to array[r]
    //  array[q..j-1] are values known to be > array[r]
    //  array[j..r-1] haven't been compared with array[r]
    for (let j = p; j < r; j++) {
        // If array[j] > array[r], just increment j.
        // If array[j] <= array[r], swap array[j] with array[q],
        //   increment q, and increment j.
        if (array[j] <= array[r]) {
            swap(array, q, j);
            q++;
        }
    }
    // Once all elements in array[p..r-1]
    //  have been compared with array[r],
    //  swap array[r] with array[q], and return q.
    swap(array, q, r);

    return q;
}

/**
 * Quick sort implementation
 *
 * Worst case is Θ(n^2)
 * Average case is Θ(n * lgn)
 * Best case is Θ(n * lgn)
 * @param array
 * @param p
 * @param r
 */
function quickSort(array, p, r) {
    if (p < r) {
        const pivot = partition(array, p, r);
        quickSort(array, p, pivot - 1);
        quickSort(array, pivot + 1, r);
    }
}

const array1 = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];
quickSort(array1, 0, array1.length - 1);
console.log('Array after sorting:', array1);
const array2 = [9, 7, 5, 11, 12, 0, 14, 3, 10, 6, -1];
quickSort(array2, 0, array2.length - 1);
console.log('Array after sorting:', array2);