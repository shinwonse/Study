import Node from './Node.js';

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  print() {
    let currentNode = this.head;
    for (let i = 0; i < this.length; i += 1) {
      console.log(currentNode.data, currentNode.next)
      console.log()
      currentNode = currentNode.next;
    }
    while (currentNode.next !== null) {
      console.log(currentNode.data);
    }
  }

  insert(index, data) {
    if (index >= this.length) {
      throw '삽입 길이 초과입니다.'
    }
    this.length += 1;
    const node = new Node(data);
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    if (currentNode == null) { // 첫 삽입
      this.head = node;
      return;
    }
    if (currentNode.next !== null) { // 중간 삽입
      node.next = currentNode.next;
    }
    currentNode.next = node;
  }

  delete(index) {
    let currentNode = this.head;
    for (let i = 0; i < index - 1; i += 1) {
      currentNode = currentNode.next;
    }
    const beforeTargetNode = currentNode;
    const targetNode = currentNode.next;
    beforeTargetNode.next = targetNode.next;
  }
}

export default LinkedList;
