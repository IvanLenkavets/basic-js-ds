const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  items = [];

  // Добавление элемента в стек
  push(element) {
    this.items.push(element);
  }

  // Удаление и возврат верхнего элемента стека
  pop() {
    return this.items.pop();
  }

  // Возврат верхнего элемента стека без его удаления
  peek() {
    return this.items[this.items.length - 1];
  }
}

module.exports = {
  Stack
};
