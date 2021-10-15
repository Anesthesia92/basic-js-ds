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
let x = this.leaves
    if (!x) {
      x = new Node()
    } else {
      while (x) {
        if (data < x.data) {
          if (x.left) {
            x = x.left
          } else {
            x.left = new Node(data)
            break
          }
        }
        if (data > x.data) {
          if (x.right) {
            x = x.right
          } else {
            x.right = new Node (data)
            break
          }}}}}
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
          : findData (node.right, data )
    }

    return findData ( x, data )

  }

  remove(data) {

  }

  min() {

  }

  max() {

  }

}