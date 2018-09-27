// Algorithms: Implement Insertion Sort
// The next sorting method we'll look at is insertion sort. This method works by building up a sorted array at the beginning of the list. It begins the sorted array with the first element. Then it inspects the next element and swaps it backwards into the sorted array until it is in sorted position. It continues iterating through the list and swapping new items backwards into the sorted portion until it reaches the end. This algorithm has quadratic time complexity in the average and worst cases.

// Instructions: Write a function insertionSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.

function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let toMove = arr[i];
    let curr = i - 1;
    while (curr >= 0 && arr[curr] > toMove) {
      arr[curr + 1] = arr[curr];
      curr--;
    }
    arr[curr + 1] = toMove;
  }
  return arr;
}

module.exports = insertionSort;

// test input
// let arr1 = [7, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92, 1];

// console.log(insertionSort(arr1));