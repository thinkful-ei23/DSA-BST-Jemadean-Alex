'use strict';

const BinarySearchTree = require ('./BinarySearchTree');

function main() {
  const BST = new BinarySearchTree();
  BST.insert(3, 3);
  BST.insert(1, 1);
  BST.insert(4, 4);
  BST.insert(6, 6);
  BST.insert(9, 9);
  BST.insert(2, 2);
  BST.insert(5, 5);
  BST.insert(7, 7);
  // console.log(BST.right.right.right.left.left === null);

  // HEIGHT OF A BST

  // console.log(BST.find(3));

  // Input is a BST
  // OUTPUT WILL BE A NUMBER WITH THE HEIGHT | should be 5
  console.log(heightOfBST(BST));
  // console.log(BST);

}

function heightOfBST(binarySearchTree) {
  let height = 0;
  console.log(binarySearchTree);

  // look at node and see if they have a left and right
  // explore them until we get a NULL for a child node
  if(binarySearchTree === null) {
    return height;
  }
  if(binarySearchTree.left !== null && binarySearchTree.right !== null) {
    if(binarySearchTree.left.left !== null && binarySearchTree.left.right !== null) {
      return heightOfBST(binarySearchTree.left.left);
    }
  }




  return height;
}

main();