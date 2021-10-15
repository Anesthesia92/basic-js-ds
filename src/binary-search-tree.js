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
      return node}}
  has(data) {
    return this.find( data ) ? true : false
  }
    find(data) {
    let x = this.leaves
    const findData = ( node, data ) => {
      if ( !node ) return null
      if ( node.data === data ) return node
      return node.data > data
          ? findData( node.left, data )
          : findData (node.right, data )}
    return findData ( x, data )
  }
  remove(data) {
    this.root = this.removeNode(this.root, data);
  }
  removeNode(node, key)
  {if(node === null)
      return null;
    else if(key < node.data) {
      node.left = this.removeNode(node.left, key);
      return node;
    } else if(key > node.data) {
      node.right = this.removeNode(node.right, key);
      return node;
    } else {
      if(node.left === null && node.right === null) {
        node = null;
        return node;}
      if(node.left === null)
      {
        node = node.right;
        return node;
      } else if(node.right === null) {
        node = node.left;
        return node;}
      let aux = this.findMinNode(node.right);
      node.data = aux.data;
      node.right = this.removeNode(node.right, aux.data);
      return node;}

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