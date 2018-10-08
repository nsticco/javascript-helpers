// binary search with recursion
// This algorithm is O(log n)
function binarySearch(arr, target, low=0, high=arr.length-1) {
  if (low > high) {
    return null;
  }

  // Find the middle of array
  let mid = Math.floor((low + high) / 2);

  // Check to see if middle value is equal to target
  if (arr[mid] === target) {
    return mid;
  } 
  // if target is larger than mid, move low above mid  
  else if (target > arr[mid]) {

    return binarySearch(arr, target, mid+1, high)
  } 
  // if target is smaller than mid, move high below mid    
  else {
    return binarySearch(arr, target, low, mid-1)
  }
}


// binary search with while loop
function binarySearchWhile(arr, target) {
  let high = arr.length - 1;
  let low = 0;
  let mid;

  while (low <= high) {
    mid = Math.floor((high + low) / 2);
    // Check to see if middle value is equal to target
    if (arr[mid] === target) {
      return mid;
    } else if (target > arr[mid]) {
      // move low above mid
      low = mid + 1;
    } else {
      // move high below mid
      high = mid - 1;
    }
  }

  return null;
}

let array = [3, 4, 6, 2, 3, 645, 2, 3, 6, 83, 23, 13];
sorted = array.sort((a,b) => a - b);
console.log(sorted);

console.log(binarySearch(sorted, 645));