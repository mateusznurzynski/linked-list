const LinkedList = function LinkedList() {
  return {
    size: 0,
    head: null,
    tail: null,
    prepend(value = null) {
      if (this.head === null && this.tail === null) {
        const newNode = Node(value);
        this.head = newNode;
        this.tail = newNode;
        return newNode;
      } else {
        const oldHead = this.head;
        const newNode = Node(value, oldHead);
        this.head = newNode;
        return newNode;
      }
    },
  };
};

const Node = function Node(value = null, nextNode = null) {
  return {
    value,
    nextNode,
  };
};

const list = LinkedList();
