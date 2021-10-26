/**
 * Insertion sort algorithm (by ascend order)
 * Complexity :
 *  - Worst case O (n^2)
 *  - Best case  O (n)
 * @param {Array} A array to sort
 */
function insertSort(A) {
  if (A.length === 0) return A;
  for (let i = 0; i < A.length; i++) {
    let key = A[i];
    let j = i - 1;
    while (j >= 0 && A[j] > key) {
      A[j + 1] = A[j];
      j -= 1;
    }
    A[j + 1] = key;
  }
  return A;
}

console.log(
  insertSort([
    76, 72, 54, 50, 85, 47, 59, 7, 47, 81, 60, 6, 15, 30, 32, 75, 94, 23, 64, 1,
    96, 57, 85, 40, 13, 38, 53, 67, 83, 26, 84, 15, 74, 8, 9, 76, 76, 95, 55,
    40, 32, 19, 76, 75, 30, 71, 13, 19, 52, 61,
  ])
);
