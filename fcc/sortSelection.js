// Algorithms: Implement Selection Sort
// Here we will implement selection sort. Selection sort works by selecting the minimum value in a list and swapping it with the first value in the list. It then starts at the second position, selects the smallest value in the remaining list, and swaps it with the second element. It continues iterating through the list and swapping elements until it reaches the end of the list. Now the list is sorted. Selection sort has quadratic time complexity in all cases.

// Instructions: Write a function selectionSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.

function selectionSort(arr) {
  // We only sort one at a time, so we need to make arr.length passes
  for (let i = 0; i < arr.length - 1; i++) {
    // Each time we iterate through, we can start one index higher
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      // If we find a value smaller than min's value, min becomes that index
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    // Swap min with arr[i]
    let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }
  return arr;
}

// test input
let arr1 = [7, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92, 1];

console.log(selectionSort(arr1));