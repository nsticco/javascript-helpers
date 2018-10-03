// Provide input to countInvRec in the form of { array: array }

function mergeCount(arr1, arr2, n) {
  let i = 0;
  let j = 0;  
  let merged = [];
  let count = 0;
  for (let k = 0; k < n; k++) {
    if (arr1.length <= i) {
      merged[k] = arr2[j];
      j++;
    }
    else if (arr2.length <= j) {
      merged[k] = arr1[i];
      i++;
    }
    else if (arr1[i] <= arr2[j]) {
      merged[k] = arr1[i];
      i++;
    } else {
      merged[k] = arr2[j];
      count += arr1.length - i;
      j++;
    }
  }
  return { array: merged, count: count }
}

function countInvRec({ array: a, count: count=0 }) {
  // Set base case for recursion
  if (a === undefined || a.length < 2) {
    return { array: a, count: 0 };
  }
  
  // Split into halves for recursion
  const n = a.length;
  const halfn = Math.floor(n / 2);
  const b = countInvRec({ array: a.slice(0, halfn), count: 0 });
  const c = countInvRec({ array: a.slice(halfn), count: 0 });
  const d = mergeCount(b.array, c.array, n);

  let fnlCnt = b.count + c.count + d.count + count;
  let fnlArr = d.array;
  
  return { array: fnlArr, count: fnlCnt } 
  
}
