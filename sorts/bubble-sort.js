// ES5
// function swap(arr, index1, index2) {
//     var tmp = arr[index1];
//     arr[index1] = arr[index2];
//     arr[index2] = tmp;
// }

/**
 * Function implements bubble sort algorithm
 * @param arr - array to sort
 * @returns {*} - sorted array
 */
function bubbleSort(arr) {
    // ES2015
    const swap = (arr, index1, index2) => {
        [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    };
    let noSwaps;

    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                noSwaps = false;
            }
        }
        // Useful for the cases with nearly sorted arrays
        if (noSwaps) {
            break;
        }
    }

    return arr;
}

console.log(bubbleSort([7, 3, 15, 4, 35, 16, 1, -2, 0]));
console.log(bubbleSort([37, 45, 29, 8]));
console.log(bubbleSort([37, 45, 29, 8, 12, 88, -3]));
console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]));