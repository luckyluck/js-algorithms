// This function partitions given array and returns the index of the pivot.
function pivot(arr, start = 0, end = arr.length + 1) {
    let p = arr[start];
    let swapIndex = start;

    for (let i = start + 1; i < end; i++) {
        if (p > arr[i]) {
            swapIndex++;
            // swap
            [arr[i], arr[swapIndex]] = [arr[swapIndex], arr[i]];
        }
    }

    // swap the pivot with last swapped index
    [arr[start], arr[swapIndex]] = [arr[swapIndex], arr[start]];

    return swapIndex;
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
 * @param arr
 * @param left
 * @param right
 */
function quickSort(arr, left = 0, right = arr.length) {
    if (left < right) {
        const pivotIndex = pivot(arr, left, right);
        quickSort(arr, left, pivotIndex);
        quickSort(arr, pivotIndex + 1, right);
    }

    return arr;
}

console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]));
console.log(quickSort([9, 7, 5, 11, 12, 2, 14, 3, 10, 6]));
console.log(quickSort([9, 7, 5, 11, 12, 0, 14, 3, 10, 6, -1]));