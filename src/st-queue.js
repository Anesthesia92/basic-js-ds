const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js')

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {
  constructor() {
    this.elements = null
  }
  getUnderlyingList() {
     return this.elements
  }
  enqueue(value) {
    if (!this.elements) {
      this.elements = new ListNode(value);
    } else {
      let current = this.elements
      while (current.next) {
        current = current.next;
      }
      current.next = new ListNode(value)}}
  dequeue() {
    let value =  this.elements.value
    this.elements = this.elements.next
    return value
  }
}
