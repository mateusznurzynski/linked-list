const LinkedList = function LinkedList() {
  return {
    size: 0,
    head: null,
    tail: null,
  };
};

const Node = function Node(value = null, nextNode = null) {
  return {
    value,
    nextNode,
  };
};
