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
 * Worst case is Θ(n^2) - unbalanced partitions (partially sorted array)
 * Average case is Θ(n * lgn) - 3-to-1 partition
 * Best case is Θ(n * lgn) - balanced as possible partition
 *
 * In fact, with a little more effort, you can improve your chance of getting a split that's at worst 3-to-1.
 * Randomly choose not one, but three elements from the subarray, and take median of the three as the pivot
 * (swapping it with the rightmost element). By the median, we mean the element of the three whose value is in the middle.
 * We won't show why, but if you choose the median of three randomly chosen elements as the pivot, you have a 68.75% chance (11/16)
 * of getting a 3-to-1 split or better. You can go even further. If you choose five elements at random and take the median as the pivot,
 * your chance of at worst a 3-to-1 split improves to about 79.3% (203/256). If you take the median of seven randomly chosen elements,
 * it goes up to about 85.9% (1759/2048). Median of nine? About 90.2% (59123/65536). Median of 11? About 93.1% (488293/524288).
 * You get the picture. Of course, it doesn't necessarily pay to choose a large number of elements at random and take their median,
 * for the time spent doing so could counteract the benefit of getting good splits almost all the time.
 *
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