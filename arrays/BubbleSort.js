/**
 * Bubble sort algorithm
 * Complexity :
 *  - Worst case O (n^2)
 *  - Best case  O (n)
 * @param {Array} A array to sort
 */
function bubbleSort(A) {
  if (A.length === 0) return A;
  for (let i = 0; i < A.length; i++) {
    const hasSwapped = false;
    for (let j = 0; j < A.length - 1; j++) {
      if (A[j] > A[j + 1]) {
        hasSwapped = true;
        [(A[i], A[index])] = [A[index], A[i]];
      }
    }

    return A;
  }
}

console.log(
  insertSort([
    76, 72, 54, 50, 85, 47, 59, 7, 47, 81, 60, 6, 15, 30, 32, 75, 94, 23, 64, 1,
    96, 57, 85, 40, 13, 38, 53, 67, 83, 26, 84, 15, 74, 8, 9, 76, 76, 95, 55,
    40, 32, 19, 76, 75, 30, 71, 13, 19, 52, 61,
  ])
);
