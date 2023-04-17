const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

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
class Queue {
  count = null;
  link = null;

  enqueue(value) {
    class ListNode {
      constructor(value, next = null) {
        this.value = value;
        this.next = next;
      }
    }

    const newNode = new ListNode(value);

    if (this.count === null) {
      this.count = newNode;
      this.link = newNode;
    } else {
      let current = this.count;

      while (current.next !== null) {
        current = current.next;
      }

      current.next = newNode;
      this.link = newNode;
    }
  }

  dequeue() {
    if (this.count === null) {
      return null;
    }

    const value = this.count.value;
    this.count = this.count.next;

    if (this.count === null) {
      this.link = null;
    }

    return value;
  }

  getUnderlyingList() {
    return this.count;
  }
}

module.exports = {
  Queue
};
