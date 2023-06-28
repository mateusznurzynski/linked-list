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
        this.size++;
        return newNode;
      } else {
        const oldHead = this.head;
        const newNode = Node(value, oldHead);
        oldHead.previousNode = newNode;
        this.size++;
        this.head = newNode;
        return newNode;
      }
    },
    append(value) {
      if (this.head === null && this.tail === null) {
        const newNode = Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.size++;
        return newNode;
      } else {
        const oldTail = this.tail;
        const newNode = Node(value, null, oldTail);
        oldTail.nextNode = newNode;
        this.size++;
        this.tail = newNode;
        return newNode;
      }
    },
    at(index) {
      const lastIndex = this.size - 1;
      const middleIndex = parseInt(lastIndex / 2);
      if (index <= 0) {
        return this.head;
      }
      if (index > lastIndex) {
        return this.tail;
      }
      if (index <= middleIndex) {
        let currentNode = this.head;
        let currentIndex = 0;
        while (currentNode !== null) {
          if (currentIndex++ === index) {
            return currentNode;
          }
          currentNode = currentNode.nextNode;
        }
      } else {
        let currentNode = this.tail;
        let currentIndex = lastIndex;
        while (currentNode !== null) {
          if (currentIndex-- === index) {
            return currentNode;
          }
          currentNode = currentNode.previousNode;
        }
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
    pop() {
      const oldTail = this.tail;
      const newTail = this.tail.previousNode;
      newTail.nextNode = null;
      this.tail = newTail;
      return oldTail;
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
list.append('1');
list.append('2');
list.append('3');
list.append('4');
list.append('5');
list.append('6');
list.append('7');
list.append('8');
list.append('9');
list.append('10');
list.prepend('Prepended value');
list.pop();
console.log(list.toString());
console.log(list);
console.log(list.size);
console.log(list.at(5));
