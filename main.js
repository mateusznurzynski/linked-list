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
        oldHead.previousNode = newNode;
        this.head = newNode;
        return newNode;
      }
    },
    append(value) {
      if (this.head === null && this.tail === null) {
        const newNode = Node(value);
        this.head = newNode;
        this.tail = newNode;
        return newNode;
      } else {
        const oldTail = this.tail;
        const newNode = Node(value, null, oldTail);
        oldTail.nextNode = newNode;
        this.tail = newNode;
        return newNode;
      }
    },
    toString() {
      let string = '';
      if (this.head === null && this.tail === null) {
        string += '( null )';
        return string;
      }
      let currentNode = this.head;
      while (currentNode !== null) {
        const value = currentNode.value;
        string += `( ${value} ) -> `;
        currentNode = currentNode.nextNode;
      }
      string += 'null';
      return string;
    },
  };
};

const Node = function Node(value = null, nextNode = null, previousNode = null) {
  return {
    value,
    nextNode,
    previousNode,
  };
};

const list = LinkedList();
list.prepend('some value');
list.prepend('some other value');
list.prepend('some weird value');
list.append('Appended value');
console.log(list.toString());
console.log(list);
