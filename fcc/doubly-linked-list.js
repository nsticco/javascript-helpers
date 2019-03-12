var Node = function(data, prev) {
  this.data = data;
  this.prev = prev;
  this.next = null;
};
var DoublyLinkedList = function() {
  this.head = null;
  this.tail = null;
  this.length = 0;

  this.add = value => {
    var node = new Node(value, this.tail);
    if (this.tail == null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
  };

  this.remove = value => {
    let currentNode = this.head;
    let currentIndex = 0;
    while (currentIndex < this.length) {
      console.log(
        `Entered loop with currentIndex at ${currentIndex} and length at ${
          this.length
        }`
      );
      // Remove head match
      if (currentNode.data == value && currentIndex == 0) {
        currentNode = currentNode.next;
        if (this.length == 1) {
          this.head = null;
          this.tail = null;
        } else {
          this.head = this.head.next;
          this.head.prev = null;
        }
        this.length--;
      }
      // Remove tail match
      else if (currentNode.data == value && currentIndex == this.length - 1) {
        currentNode.prev.next = null;
        this.tail = currentNode.prev;
        this.tail.next = null;
        this.length--;
      }
      // Remove node if it matches value
      else if (currentNode.data == value) {
        let prev = currentNode.prev;
        currentNode.prev = currentNode.next;
        currentNode.next = prev;
        this.length--;
      }
      // Otherwise move on to next node
      else {
        currentNode = currentNode.next;
        currentIndex++;
      }
    }
  };

  this.reverse = () => {
    if (this.length == 0) return null;

    this.head = this.tail;
    this.head.next = this.tail.prev;
    this.head.prev = null;
    let current = this.head;
    let i = 0;

    while (i < this.length - 1) {
      let previous = current;
      current = current.next;
      current.next = current.prev;
      current.prev = previous;
      i++;
    }
    this.tail = current;
    this.tail.next = null;
  };
};

let test = new DoublyLinkedList();

test.add(10);
test.add(4);

console.log(test);

test.reverse();

console.log(test);
