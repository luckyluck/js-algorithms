/**
 * The function responsible for the merge part of the sorting algorithm
 *
 * Merging takes Θ(n) time
 * @param arr1 - first array to merge
 * @param arr2 - second array to merge
 */
function merge(arr1, arr2) {
    const results = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        results.push(arr1[i]);
        i++
    }
    while (j < arr2.length) {
        results.push(arr2[j]);
        j++
    }

    return results;
}

/**
 * Merge sort function implementation following divide-and-conquer principle
 *
 * Complexity of a merging sort is Θ(n * lgn)
 * It is worth to notice that the merge sort does not work in place because of that left/right copies
 * Sometimes it can be preferable to use an in-place sorts
 * @param arr - array to sort
 */
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const midPoint = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, midPoint));
    const right = mergeSort(arr.slice(midPoint));

    return merge(left, right);
}

console.log(mergeSort([3, 7, 12, 14, 2, 6, 9, 11]));
console.log(mergeSort([3, 7, 12, 14, 2, 6, 9, 11, -1, 0]));