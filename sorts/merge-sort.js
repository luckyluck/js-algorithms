/**
 * The function responsible for the merge part of the sorting algorithm
 *
 * Merging takes Θ(n) time
 * @param array - initial array
 * @param p - the start point
 * @param q - the middle of the array
 * @param r - the end point
 */
function merge(array, p, q, r) {
    const lowHalf = [];
    const highHalf = [];

    let k = p;
    let i;
    let j;
    for (i = 0; k <= q; i++, k++) {
        lowHalf[i] = array[k];
    }
    for (j = 0; k <= r; j++, k++) {
        highHalf[j] = array[k];
    }

    k = p;
    i = 0;
    j = 0;

    // Repeatedly compare the lowest untaken element in
    // lowHalf with the lowest untaken element in highHalf
    // and copy the lower of the two back into array
    while (i < lowHalf.length && j < highHalf.length) {
        if (lowHalf[i] < highHalf[j]) {
            array[k] = lowHalf[i];
            i++;
        } else if (lowHalf[i] > highHalf[j]) {
            array[k] = highHalf[j];
            j++;
        } else {
            array[k] = lowHalf[i];
            k++;
            array[k] = highHalf[j];
            i++;
            j++;
        }

        k++;
    }


    // Once one of lowHalf and highHalf has been fully copied
    // back into array, copy the remaining elements from the
    // other temporary array back into the array
    if (i < lowHalf.length) {
        while (i < lowHalf.length) {
            array[k] = lowHalf[i];
            i++;
            k++;
        }
    }
    if (j < highHalf.length) {
        while (j < highHalf.length) {
            array[k] = highHalf[j];
            j++;
            k++;
        }
    }
}

/**
 * Merge sort function implementation following divide-and-conquer principle
 *
 * Complexity of a merging sort is Θ(n * lgn)
 * It is worth to notice that the merge sort does not work in place because of that lowHalf/highHalf copies
 * Sometimes it can be preferable to use and in-place sorts
 * @param array - array to sort
 * @param p - the start points
 * @param r - the end point
 */
function mergeSort(array, p, r) {
    if (p < r) {
        const q = Math.floor((p + r) / 2);
        mergeSort(array, p, q);
        mergeSort(array, q + 1, r);
        merge(array, p, q, r);
    }
}

const array1 = [3, 7, 12, 14, 2, 6, 9, 11];
mergeSort(array1, 0, array1.length - 1);
console.log('Array after merging:', array1);

const array2 = [3, 7, 12, 14, 2, 6, 9, 11, -1, 0];
mergeSort(array2, 0, array2.length - 1);
console.log('Array after merging:', array2);