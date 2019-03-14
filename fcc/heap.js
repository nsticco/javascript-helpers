const MaxHeap = function() {
  let arr = [null];
  let size = 0;

  this.print = () => {
    return arr;
  };

  this.parent = i => {
    return Math.floor(i / 2);
  };

  this.leftChild = i => {
    return i * 2;
  };

  this.rightChild = i => {
    return i * 2 + 1;
  };

  this.swap = (a, b) => {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  };

  this.siftUp = i => {
    while (i > 1 && arr[this.parent(i)] < arr[i]) {
      this.swap(this.parent(i), i);
      i = this.parent(i);
    }
  };

  this.siftDown = i => {
    // Start with maxIndex as current
    let maxIndex = i;
    let leftIndex = this.leftChild(i);
    if (leftIndex <= size && arr[leftIndex] > arr[maxIndex]) {
      maxIndex = leftIndex;
    }
    let rightIndex = this.rightChild(i);
    if (rightIndex <= size && arr[rightIndex] > arr[maxIndex]) {
      maxIndex = rightIndex;
    }
    if (i != maxIndex) {
      this.swap(i, maxIndex);
      this.siftDown(maxIndex);
    }
  };

  this.insert = element => {
    size++;
    arr.push(element);
    this.siftUp(size);
  };

  this.maxExtract = () => {
    // We set the 1st non-null value of the array to result
    let result = arr[1];
    // Then we set the value of that index to the last item
    arr[1] = arr.pop();
    // We reduce size by 1
    size--;
    // We then shift index 1 down into its proper ordering
    this.siftDown(1);
    return result;
  };
};

let test = new MaxHeap();

test.insert(9);
test.insert(10);
test.insert(3);
test.insert(6);
test.insert(8);

test.maxExtract();

console.log(test.print());
