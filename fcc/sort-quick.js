// This version of quickSort mutates an array in place
// It is very fast and doesn't use extra memory

function swap(arr, i, j) {
  let tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

function partition(arr, left, right) {
  // Choose pivot index randomly and then swap to front of array
  let pindex = Math.floor(Math.random() * arr.length)
  // let pindex = Math.floor(arr.length / 2);
  swap(arr, left, pindex);
  let pivot = arr[left];
  let i = left + 1;
  for (let j = left + 1; j <= right; j++) {
    // if the element we're checking is GTE pivot, we do nothing
    // if the element is LT pivot, we need to do a swap
    if (arr[j] < pivot) {
      swap(arr, i, j);
      i++;
    }
  }

  // swap pivot to proper location right before GT values
  swap(arr, left, i-1);

  return i;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  // base case
  if (left >= right) return arr;

  let index = partition(arr, left, right);

  quickSort(arr, left, index - 2);
  quickSort(arr, index, right);    

  return arr;
}

module.exports = quickSort;

// test input
let arr1 = [7, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92, 1];

console.log(quickSort(arr1));

