import DoublyLinkedList from './DoublyLinkedList.js';

const doublyLinkedList = new DoublyLinkedList();

doublyLinkedList.append(1);
doublyLinkedList.append(2);
doublyLinkedList.append(3);
doublyLinkedList.insert(6,2);
doublyLinkedList.delete(1);
doublyLinkedList.print();
