var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  this.add = value => {
    let current = this.root;
    if (this.root == null) {
      this.root = new Node(value);
      return undefined;
    }

    while (true) {
      if (value < current.value && current.left != null) {
        current = current.left;
      } else if (value < current.value && current.left == null) {
        // Add to the left and return undefined
        current.left = new Node(value);
        return undefined;
      } else if (value > current.value && current.right != null) {
        current = current.right;
      } else if (value > current.value && current.right == null) {
        // Add to the right and return undefined
        current.right = new Node(value);
        return undefined;
      } else if (value == current.value) {
        return null;
      }
    }
  };
  this.findMin = () => {
    if (this.root == null) return null;
    let current = this.root;
    while (current.left != null) {
      current = current.left;
    }
    return current.value;
  };
  this.findMax = () => {
    if (this.root == null) return null;
    let current = this.root;
    while (current.right != null) {
      current = current.right;
    }
    return current.value;
  };
}

let test = new BinarySearchTree();
test.add(4);
test.add(2);
test.add(6);
test.add(1);
test.add(3);
test.add(5);
test.add(7);

displayTree(test);
