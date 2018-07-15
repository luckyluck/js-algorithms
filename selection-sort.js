/**
 * Selection sort has a O(n^2) complexity
 * Due to nested loops function should iterate through the line of codes n + n - 1 + n - 2 + ... + 1 times
 * As we can see, it's an arithmetic series and we know that it will equal to (n + 1)*(n/2)
 * Which will be equal to n^2/2 + n/2.
 * In terms of big Theta notation, we don't care about that constant factor,
 * nor do we care about the factor 1/2 or the low-order term.
 * The result is that the running time for all the calls to nested loop is big Theta of (n^2)
 * @param array - array to sort
 */
function selectionSort(array) {
    const l = array.length;

    for (let i = 0; i < l -1; i++) {
        // Searching next index of the minimum value
        let minIndex = i;
        for (let j = i + 1; j < l; j++) {
            if (array[minIndex] > array[j]) {
                minIndex = j;
            }
        }
        // Swapping minimum value with current position
        const temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
    }
}

const array1 = [22, 11, 99, 88, 9, 7, 42];
selectionSort(array1);
console.log('Array after sorting:', array1);
const array2 = [22, 11, 99, 0, 9, 7, 42, -1, 15];
selectionSort(array2);
console.log('Array after sorting:', array2);