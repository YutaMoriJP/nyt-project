class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.previous = null;
  }
  setNextNode(node) {
    if (node instanceof Node || node === null) {
      this.next = node;
    }
  }
  setPreviousNode(node) {
    if (node instanceof Node || node === null) {
      this.previous = node;
    }
  }
  getNextNode() {
    return this.next;
  }
  getPreviousNode() {
    return this.previous;
  }
}

export default Node;
