// 양방향 링크드리스트 만들기
import Node from './Node.js';

class DoublyLinkedList {
  constructor() {
    this.head = null;
  }

  print() {
    let currentNode = this.head;
    let answer = '';
    while (currentNode !== null) {
      answer += currentNode.data + ' ';
      currentNode = currentNode.next;
    }
    console.log(answer);
  }

  find(data) {
    let currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
      if (currentNode.data === data) {
        return currentNode;
      }
    }
    return '찾을 수 없습니다';
  }

  append(data) {
    const node = new Node(data);
    let currentNode;
    if (this.head === null) {
      this.head = node;
    }
    else {
      currentNode = this.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
      node.prev = currentNode;
    }
  }

  insert(newData, data) {
    const node = new Node(newData);
    let currentNode = this.find(data);
    node.next = currentNode.next;
    node.prev = currentNode;
    currentNode.next = node;
    node.next.prev = node;
  }

  delete(data) {
    if (this.head.data === data) {
      this.head = this.head.next;
      this.head.prev = null;
    }
    else {
      let currentNode = this.find(data);
      if (currentNode.next === null) {
        currentNode.prev.next = null;
        currentNode.prev = null;
      }
      else {
        currentNode.prev.next = currentNode.next;
        currentNode.next.prev = currentNode.prev;
        currentNode.prev = null;
        currentNode.next = null;
      }
    }
  }
}

export default DoublyLinkedList;
