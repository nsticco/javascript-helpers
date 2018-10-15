// Algorithms: Implement Merge Sort
// Another intermediate sorting algorithm that is very common is merge sort. Like quick sort, merge sort also uses a divide-and-conquer, recursive methodology to sort an array. It takes advantage of the fact that it is relatively easy to sort two arrays as long as each is sorted in the first place. But we'll start with only one array as input, so how do we get to two sorted arrays from that? Well, we can recursively divide the original input in two until we reach the base case of an array with one item. A single-item array is naturally sorted, so then we can start combining. This combination will unwind the recursive calls that split the original array, eventually producing a final sorted array of all the elements. The steps of merge sort, then, are:

// 1) Recursively split the input array in half until a sub-array with only one element is produced.

// 2) Merge each sorted sub-array together to produce the final sorted array.

// Merge sort is an efficient sorting method, with time complexity of O(nlog(n)). This algorithm is popular because it is performant and relatively easy to implement.

// As an aside, this will be the last sorting algorithm we cover here. However, later in the section on tree data structures we will describe heap sort, another efficient sorting method that requires a binary heap in its implementation.

// Instructions: Write a function mergeSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest. A good way to implement this is to write one function, for instance merge, which is responsible for merging two sorted arrays, and another function, for instance mergeSort, which is responsible for the recursion that produces single-item arrays to feed into merge. Good luck!

function mergeSort(arr) {
  // base case when we reach a single value
  if (arr.length <= 1) {
    return arr;
  }

  // divide our array into two halves
  let midpoint = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, midpoint));
  let right = mergeSort(arr.slice(midpoint));
  let merged = [];

  // Merge the two halves. If we exhaust one side, we can just add in the rest of the other
  while (left.length > 0 || right.length > 0) {
    if (left.length < 1) {
      merged = merged.concat(right);
      right = [];
    }
    else if (right.length < 1) {
      merged = merged.concat(left);
      left = [];
    }
    else if (left[0] < right[0]) {
      merged.push(left.shift());
    }
    else {
      merged.push(right.shift())
    }
  }

  return merged;
}

module.exports = mergeSort;

// test array:
// let arr1 = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]

// console.log(mergeSort(arr1));