function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element) {
    this.element = element;
    this.next = null;
  };

  this.size = function() {
    return length;
  };

  this.head = function() {
    return head;
  };

  this.isEmpty = function() {
    return length == 0;
  };

  this.add = function(element) {
    var node = new Node(element);
    if (head === null) {
      head = node;
    } else {
      var currentNode = head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }

    length++;
  };

  this.remove = function(element) {
    var currentNode = head;
    var previousNode;
    if (currentNode.element === element) {
      head = currentNode.next;
    } else {
      while (currentNode.element !== element) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      previousNode.next = currentNode.next;
    }

    length--;
  };

  this.indexOf = function(element) {
    if (head == null) {
      return -1;
    }
    var currentNode = head;
    var index = 0;
    while (currentNode.element != element) {
      if (!currentNode.next) {
        return -1;
      }
      currentNode = currentNode.next;
      index++;
    }
    return index;
  };

  this.elementAt = function(index) {
    if (index < 0 || index >= length) return undefined;
    var currentNode = head;
    var currentIndex = 0;
    while (currentIndex != index) {
      currentNode = currentNode.next;
      currentIndex++;
    }
    return currentNode.element;
  };

  this.removeAt = function(index) {
    if (index < 0 || index >= length) return null;
    var currentNode = head;
    var currentIndex = 0;
    var prevNode;
    length--;
    while (currentIndex != index) {
      prevNode = currentNode;
      currentNode = currentNode.next;
      currentIndex++;
    }

    if (index == 0) {
      head = currentNode.next;
    } else {
      prevNode.next = currentNode.next;
    }
    return currentNode.element;
  };
}

let test = new LinkedList();
test.add(7);
test.add(10);
test.add(4);
test.add(13);

console.log(test.size());
console.log(test.removeAt(-1));
console.log(test.removeAt(3));
console.log(test.removeAt(4));
