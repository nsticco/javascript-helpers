    while (currentIndex < this.length - 1) {
      let previous = current;
      current = current.next;
      current.next = current.prev;
      current.prev = previous;
    }