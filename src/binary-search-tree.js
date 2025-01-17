const { NotImplementedError } = require('../extensions/index.js');
 const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {
  constructor() {
    this.leaves = null;
  }
  root() {
    return this.leaves
  }

  add(data) {
    this.leaves = addNodes(this.leaves, data)

    function addNodes(node, data) {
      if (!node) {
        return new Node(data)
      }
      if (node.data === data) {
        return node
      }
      if (data < node.data) {
        node.left = addNodes(node.left, data)
      } else {
        node.right = addNodes(node.right, data)
      }
      return node
    }
  }
  has(data) {
    return !!this.find(data)
  }
  find(data) {
    let x = this.leaves
    const findData = (node, data) => {
      if (!node) return null
      if (node.data === data) return node
      return node.data > data
          ? findData(node.left, data)
          : findData(node.right, data)
    }
    return findData(x, data)
  }

  remove(data) {
    const removeNodes = function (node, data) {
      if (node === null) {
        return null
      }
      if (data === node.data) {
        if (node.left == null && node.right == null) {
          return null
        }
        if (node.left == null) {
          return node.right;
        }
        if (node.right == null) {
          return node.left;
        }
        let Node = node.right;
        while (Node.left !== null) {
          Node = Node.left;
        }
        node.data = Node.data;
        node.right = removeNodes(node.right, Node.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNodes(node.left, data);
        return node;
      } else {
        node.right = removeNodes(node.right, data);
        return node;}
    }
    let x = this.leaves
    x = removeNodes(x, data);
  }

  min() {
    let x = this.leaves.left
    let min = this.leaves.left
    while (x){
      min = x.data
      x = x.left
    }
    return min
  }

  max() {
    let x = this.leaves.left
    let max = this.leaves.left
    while (x) {
      max = x.data
      x = x.left
    }
    return max
  }
}